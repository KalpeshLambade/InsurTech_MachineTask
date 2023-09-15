import HospitalModels from "../model/hospitalModel.js";

export const checkAddHospitals = async(req,res,next) => {
    try {
        const {providerName,HOS,address} = req.body;

        if(!providerName) return res.status(400) .json({status: 400,sucess: false, message: `Provider Name is required`,});
        if(!HOS) return res.status(400) .json({status: 400,sucess: false, message: `HOS ID is required`,});
        if(!address) return res.status(400) .json({status: 400,sucess: false, message: `address is required`,});

        const isRegister = await HospitalModels.findOne({HOS}).exec();

        if(isRegister) return res.status(400) .json({status: 400,sucess: false, message: `Hospital Already registerd`,});

        next();

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}