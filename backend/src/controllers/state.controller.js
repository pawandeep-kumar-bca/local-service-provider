const stateModal = require("../models/State.model");
const districtModal = require("../models/district.model");
const cityModal = require("../models/city.model");

const getAllStates = async (req, res) => {
  try {
    const allStates = await stateModal.find();
    if (allStates.length === 0) {
      return res.status(200).json({
        status: true,
        allStates: [],
        message: "States not found",
      });
    }
    return res.status(200).json({
      status: true,
      allStates,
      message: "fetch all state successfully",
    });
  } catch (err) {
    console.error("get all state error", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const getAllDistrictByStates = async (req, res) => {
  try {
    const { stateId } = req.params;

    const AllDistricts = await districtModal.find({ stateId });
    if (AllDistricts.length === 0) {
      return res.status(200).json({
        status: true,
        AllDistricts: [],
        message: "Districts not found",
      });
    }

    return res.status(200).json({
      status: true,
      AllDistricts,
      message: "Fetch all districts successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getAllCityByDistrict = async (req, res) => {
  try {
    const { districtId } = req.params;

    const allCities = await cityModal.find({ districtId });

    if (allCities.length === 0) {
      return res.status(200).json({
        status: true,
        allCities: [],
        message: "Cities not found",
      });
    }

    return res.status(200).json({
      status: true,
      allCities,
      message: "Fetch all cities successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
module.exports = { getAllStates, getAllDistrictByStates, getAllCityByDistrict };
