import AuditSchema from "../model/auditModel.js";
import Users from "../model/userModel.js"
import OldAuditSchema from "../model/oldAuditModel.js"


export const addTask = async(req,res) =>{
    try {

        const {hostId,providerName,action,remark} = req.body;

        const isUser = await Users.findOne({hostId});

        if(!isUser) return res.status(400) .json({status: 400,sucess: false, message: `New task added sucessfully`});
        
        const maxTask = await AuditSchema.findOne({}).sort({ taskId: -1 });
        const newTaskId = maxTask ? maxTask.taskId + 1 : 1;

        const newTask = new AuditSchema({
            taskId : newTaskId,
            hostId,
            providerName,
            action,
            remark
        });

        const oldTask = new OldAuditSchema({
            taskId : newTaskId,
            hostId,
            providerName,
            action,
            remark
        });

        await newTask.save();
        await oldTask.save();

        return res.status(201) .json({status: 200,sucess: true, message: `New task added sucessfully`});

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const getTask = async(req,res) => {
    try {

        const allTask = await AuditSchema.find();

        return res.status(400) .json({status: 400,sucess: true, message: `All task displyed`, allTask});


    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const updateTask = async(req,res) => {
    try {
        
        const {taskId,hostId,providerName,action,remark} = req.body;

        const isTask = await AuditSchema.findOneAndUpdate({taskId},{hostId,providerName,action,remark}).exec();
        
        if(!isTask) return  res.status(400) .json({status: 400,sucess: false, message: `No Task Found`});

        return res.status(203).json({status:400, sucess:true, message:`Task Updated`});


    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const deletTask = async(req,res) => {
    try {

        const {taskId} = req.body;

        await AuditSchema.findOneAndDelete(taskId);

        return res.status(200).json({status:200, sucess:true, message:`Task Delected sucessfully`});    

        
    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const getOldTask = async(req,res) => {
    try {
        
        const getData = await OldAuditSchema.find().exec();

        return res.status(200).json({status:200, sucess:true, getData});

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}
