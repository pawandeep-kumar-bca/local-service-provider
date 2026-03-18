const userModel = require("../models/User.model");

async function getUserProfile(req, res) {
  try {
    const userExists = await userModel
      .findById(req.user.id)
      .select("-password");
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User profile fetched",
      id: userExists._id,
      fullname: userExists.fullname,
      email: userExists.email,
      role: userExists.role,
      isVerified: userExists.isVerified,
    });
  } catch (err) {
    console.error("User profile error:", err);

    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateUserProfile(req, res) {
  try {
    const { fullname } = req.body;
    if (!fullname) {
      return res.status(400).json({ message: "fullname field is required" });
    }
    const userExists = await userModel
      .findById(req.user.id)
      .select("-password");

    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    userExists.fullname = fullname;
    await userExists.save();
    return res.status(200).json({
      message: "User profile fetched",
      userExists: {
        id: userExists._id,
        fullname: userExists.fullname,
        email: userExists.email,
        role: userExists.role,
      },
    });
  } catch (err) {
    console.error("User update profile error:", err);

    return res.status(500).json({ message: "Internal server error" });
  }
}

async function changePassword(req, res) {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await userModel.findById(req.user.id).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    if (oldPassword === newPassword || newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "New password must be different and at least 6 characters long",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (err) {
    console.error("Change password error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
module.exports = {
  getUserProfile,
  updateUserProfile,
  changePassword,
};
