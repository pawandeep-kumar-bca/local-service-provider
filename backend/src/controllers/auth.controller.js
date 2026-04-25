const userModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// ================= REGISTER =================
async function registerUser(req, res) {
  try {
    const { fullname, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(409).json({ message: "Email is already exists" });
    }
    // ✅ generate verification token
    const emailVerifyToken = crypto.randomBytes(32).toString("hex");
    const user = await userModel.create({
      fullname,
      email,
      password,
      emailVerificationToken: emailVerifyToken,
      emailVerificationExpires: Date.now() + 10 * 60 * 1000,
      role: "user",
    });

    await sendEmail(
      user.email,
      "Verify Your Email Address",
      `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <tr>
      <td align="center">
        
        <table width="500" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
          
          <tr>
            <td align="center">
              <h2 style="color: #4CAF50;">Email Verification</h2>
            </td>
          </tr>

          <tr>
            <td>
              <p>Hello ${user.fullname || "User"},</p>
              <p>Thank you for signing up! Please verify your email address.</p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 20px;">
              <a href="http://localhost:3000/api/v1/auth/verify-email/${emailVerifyToken}"
                style="background-color: #4CAF50; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Verify Email
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <p>If you did not create this account, ignore this email.</p>
              <p>This link will expire in <strong>10 minutes</strong>.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Welcome aboard 🎉</p>
              <p>Regards,<br/><strong>Local Service Provider</strong></p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `,
    );
    return res.status(201).json({
      message: "User registered successfully. Please verify your email.",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("register error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= LOGIN =================
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ email verification check
    if (!user.isVerified) {
      return res.status(403).json({ message: "Verify email first" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ access token
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "10m" },
    );

    // ✅ refresh token
    const refreshToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" },
    );
    const hashedToken = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");
    user.refreshToken = hashedToken;
    await user.save();

    res.cookie("refreshToken", hashedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= REFRESH TOKEN =================
async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const hashedToken = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // ✅ token match check
    if (hashedToken !== user.refreshToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ✅ new access token
    const newAccessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "10m" },
    );

    return res.status(200).json({
      message: "Access token refreshed successfully",
      accessToken: newAccessToken,
    });
  } catch (err) {
    console.error("refresh error:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// ================= LOGOUT =================
async function logoutUser(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(200).json({ message: "Already logged out" });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      res.clearCookie("refreshToken");
      return res.status(200).json({ message: "Logged out" });
    }

    const user = await userModel.findById(decoded.id);
    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("logout error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= ME =================
async function me(req, res) {
  try {
    const userId = req.user.id;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return res.status(200).json({
      message: "User fetched",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("me error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= VERIFY EMAIL =================
async function verifyEmail(req, res) {
  try {
    const token = req.params.token;

    const user = await userModel.findOne({
      emailVerificationToken: token,
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    if (user.emailVerificationExpires < Date.now()) {
      return res.status(400).json({ message: "Token expired" });
    }

    user.isVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;

    await user.save();

    return res.redirect("http://localhost:3000/login");
  } catch (err) {
    console.error("verify error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= FORGOT PASSWORD =================
async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(200).json({
        message: "If email exists, reset link sent",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    await user.save();

    await sendEmail(
      user.email,
      "Reset Your Password",
      `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    
    <h2 style="color: #4CAF50;">Password Reset Request</h2>

    <p>Hello ${user.name || "User"},</p>

    <p>We received a request to reset your password. Click the button below to set a new password:</p>

    <div style="margin: 20px 0;">
      <a href="http://localhost:3000/reset-password/${resetToken}" 
         style="background-color: #4CAF50; color: #fff; padding: 12px 20px; 
                text-decoration: none; border-radius: 5px; display: inline-block;">
         Reset Password
      </a>
    </div>

    <p>If you did not request this, please ignore this email. Your password will remain unchanged.</p>

    <p>This link will expire in <strong>10 minutes</strong> for security reasons.</p>

    <hr />

    <p style="font-size: 12px; color: #777;">
      If you're having trouble clicking the button, copy and paste the link below into your browser:
    </p>

    <p style="word-break: break-all; font-size: 12px;">
      http://localhost:3000/reset-password/${resetToken}
    </p>

    <br/>

    <p>Regards,<br/><strong>Local Service Provider</strong></p>

  </div>
  `,
    );

    return res.status(200).json({
      message: "Reset link sent to email",
    });
  } catch (err) {
    console.error("forgot error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

// ================= RESET PASSWORD =================
async function resetPassword(req, res) {
  try {
    const { password } = req.body;
    const token = req.params.token;

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const user = await userModel.findOne({
      passwordResetToken: token,
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }

    if (user.passwordResetExpires < Date.now()) {
      return res.status(400).json({ message: "Token expired" });
    }

    // ✅ update password
    user.password = password;

    // ✅ clear tokens
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    // ✅ logout all sessions
    user.refreshToken = null;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });
  } catch (err) {
    console.error("reset error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
  me,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
