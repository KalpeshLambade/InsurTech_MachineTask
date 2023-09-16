import mongoose,{Schema} from "mongoose";

const hospitalModel = new Schema({
    providerName:{
        type:String,
        required:true
    },
    HOS:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

export default mongoose.model("HospitalModels",hospitalModel);