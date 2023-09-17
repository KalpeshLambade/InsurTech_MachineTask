import HospitalModels from "../model/hospitalModel.js";
import { validateEmail } from "../utils/emailValidator.js";

export const checkAddHospitals = async(req,res,next) => {
    try {
        const {providerName,HOS,Address,Phone,Email,Web} = req.body;

        if(!providerName) return res.status(400) .json({status: 400,sucess: false, message: `Provider Name is required`,});
        if(!HOS) return res.status(400) .json({status: 400,sucess: false, message: `HOS ID is required`,});
        if(!Address) return res.status(400) .json({status: 400,sucess: false, message: `Address is required`,});
        if(!Phone) return res.status(400) .json({status: 400,sucess: false, message: `Phone number is required`,});
        if(!Email) return res.status(400) .json({status: 400,sucess: false, message: `Email is required`,});
        if(!Web) return res.status(400) .json({status: 400,sucess: false, message: `Web address is required`,});

        try {
            validateEmail(Email);

            const isRegister = await HospitalModels.findOne({HOS}).exec();

             if(isRegister) return res.status(400) .json({status: 400,sucess: false, message: `Hospital Already registerd`,});

            next();

        } catch (error) {
            return res.status(500).json({status: 500, sucess: false, message: `Internal server error  :${error}`});
        }


        

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

