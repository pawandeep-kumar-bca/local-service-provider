const { default: axios } = require("axios");
const userModel = require("../models/User.model");
const stateModel = require("../models/State.model");
const districtModel = require("../models/district.model");
const cityModel = require("../models/city.model");

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
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
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

    if (currentPassword === newPassword || newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "New password must be different and at least 8 characters long",
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
async function reverseGeocode(req, res) {
  try {
    const { latitude, longitude } = req.body;

    const lat = Number(latitude);
    const lon = Number(longitude);

    if (latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude are required",
      });
    }

    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude must be valid numbers",
      });
    }

    const response = await axios.get(process.env.REVERSEGEOCODE_API, {
      params: {
        format: "jsonv2",
        lat,
        lon,
      },
      headers: {
        "User-Agent": "LocalServiceProvider/1.0",
      },
    });

    const address = response.data.address;

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    const stateName = address.state;

    const districtName = address.state_district || address.county;

    const cityName =
      address.city ||
      address.town ||
      address.village ||
      address.municipality ||
      address.hamlet;

    const state = await stateModel.findOne({
      name: {
        $regex: `^${stateName}$`,
        $options: "i",
      },
    });

    if (!state) {
      return res.status(404).json({
        success: false,
        message: "State not found in database",
      });
    }

    const district = await districtModel.findOne({
      name: {
        $regex: `^${districtName}$`,
        $options: "i",
      },
      stateId: state._id,
    });

    if (!district) {
      return res.status(404).json({
        success: false,
        message: "District not found in database",
      });
    }

    const city = await cityModel.findOne({
      name: {
        $regex: `^${cityName}$`,
        $options: "i",
      },
      districtId: district._id,
    });

    if (!city) {
      return res.status(404).json({
        success: false,
        message: "City not found in database",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Location fetched successfully",

      location: {
        latitude: lat,
        longitude: lon,

        state,
        district,
        city,

        locality:
          address.suburb ||
          address.neighbourhood ||
          address.village ||
          address.town ||
          address.hamlet ||
          "",

        fullAddress: response.data.display_name,
      },
    });
  } catch (err) {
    console.error("Reverse Geocode Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
module.exports = {
  getUserProfile,
  updateUserProfile,
  changePassword,
  reverseGeocode,
};
