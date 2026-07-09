const stateModal = require('../models/State.model')
const districtModal = require('../models/district.model')
const cityModal = require('../models/city.model')



const getAllStates =async (req,res)=>{
    try{
        const allStates = await stateModal.find()
        if(!allStates){
            return res.status(200).json({
                status:true,
                allStates:[],
                message:'States are not found'
            })
        }
        return res.status(200).json({
            status:true,
            allStates,
            message:'fetch all state successfully'
        })
    }catch(err){
        console.error('get all state error',err);
        return res.status(500).json({message:
            'Internal server error'
        })
    }
}

module.exports = {getAllStates}