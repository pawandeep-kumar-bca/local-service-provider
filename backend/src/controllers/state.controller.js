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
    console.log("API HIT")
        const { stateId } = req.params;
       console.log(stateId);
       
        const AllDistricts = await districtModal.find({ stateId });
        console.log(AllDistricts);
        
        if (AllDistricts.length === 0) {
            return res.status(200).json({
                status: true,
                AllDistricts: [],
                message: "Districts not found"
            });
        }
        
        return res.status(200).json({
            status: true,
            AllDistricts,
            message: "Fetch all districts successfully"
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: "Internal server error"
        });

    }
};
// const getAllCityByDistrict = async (req, res) => {
//     try {
   
//         const { districtId } = req.params;
       
       
//         const AllCities = await cityModal.find({ stateId });

//         if (AllCities.length === 0) {
//             return res.status(200).json({
//                 status: true,
//                 AllCities: [],
//                 message: "cities not found"
//             });
//         }

//         return res.status(200).json({
//             status: true,
//             AllCities,
//             message: "Fetch all cities successfully"
//         });

//     } catch (err) {

//         console.error(err);

//         return res.status(500).json({
//             message: "Internal server error"
//         });

//     }
// };
module.exports = { getAllStates, getAllDistrictByStates };
