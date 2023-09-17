import HospitalModels from "../model/hospitalModel.js";

export const addHospitals = async(req,res) => {
    try {

        const {providerName,HOS} = req.body;

        const newHospital = new HospitalModels({
            providerName,
            HOS,
        });

        await newHospital.save();

        return res.status(201).json({status:201,sucess:true,message:`New Hospital added sucessfully`});
        
    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const getHospitals = async(req,res) =>{
    try {
        
        const getHospitals = await HospitalModels.find().exec();

        return res.status(200).json({status:200, sucess:true, message:`Hospital Data`, hospitals:getHospitals});
        
    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}
