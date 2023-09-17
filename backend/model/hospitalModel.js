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
    Address:{
        type:String,
        require:true
    },
    Phone:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        required:true
    },
    Web:{
        type:String,
        required:true
    }   
},
{timestamps:true}
)

export default mongoose.model("HospitalModels",hospitalModel);