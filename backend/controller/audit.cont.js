import AuditSchema from "../model/auditModel.js";
import { genTaskId } from "../utils/taskId.js";


export const addTask = async(req,res) =>{
    try {

        const {HOS,providerName,action,remark} = req.body;
 
        // const maxTask = await AuditSchema.findOne({}).sort({ taskId: -1 });
        // const newTaskId = maxTask ? maxTask.taskId + 1 : 1;

        const newTask = new AuditSchema({
            taskId : genTaskId(),
            HOS,
            providerName,
            action,
            remark
        });

        await newTask.save();

        return res.status(201) .json({status: 200,sucess: true, message: `New task added sucessfully`});

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const getTask = async(req,res) => {
    try {

        const allTask = await AuditSchema.find();

        return res.status(200) .json({status: 200,sucess: true, message: `All task displyed`, allTask});


    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const updateTask = async(req,res) => {
    try {
        
        const {taskId,HOS,providerName,action,remark} = req.body;

        const isTask = await AuditSchema.findOneAndUpdate({taskId},{HOS,providerName,action,remark}).exec();
        
        if(!isTask) return  res.status(400) .json({status: 400,sucess: false, message: `No Task Found`});

        return res.status(203).json({status:400, sucess:true, message:`Task Updated`});


    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error} KO`,});
    }
}

export const deletTask = async(req,res) => {
    try {

        const id = req.params.id;

        await AuditSchema.findOneAndDelete(id);

        return res.status(200).json({status:200, sucess:true, message:`Task Delected sucessfully`});    

        
    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

export const getBackup = async(req,res) => {
    try {

        const getData = await Backup.find().exec();

        return res.status(200).json({status:200, sucess:true, getData});

    } catch (error) {
        return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
    }
}

