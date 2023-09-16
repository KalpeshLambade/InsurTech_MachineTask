import HospitalModels from "../model/hospitalModel.js"
import AuditSchema from "../model/auditModel.js";


export const checkAddTask = async (req, res, next) => {
  try {
    const {providerName,HOS, action, remark } = req.body;

    if (!providerName)
      return res
        .status(400)
        .json({
          status: 400,
          sucess: false,
          message: `ProviderName is required`,
        });
        if (!HOS)
        return res
          .status(400)
          .json({
            status: 400,
            sucess: false,
            message: `HOS ID is required`,
          });
    if (!action)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Action is required` });
    if (!remark)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Remark is required` });


    const isHospital = await HospitalModels.findOne({HOS}).exec();

    if(!isHospital) return res.status(400).json({ status: 400, sucess: false, message: `Hospital Not Found` });

    next();
  } catch (error) {
    return res
      .status(500)
      .json({
        status: 500,
        sucess: false,
        message: `Internal server error :${error}`,
      });
  }
};

export const checkUpdateTask = async (req, res, next) => {
  try {
    const { taskId,HOS,providerName, action, remark } = req.body;

    if (!taskId)
      return res
        .status(400)
        .json({
          status: 400,
          sucess: false,
          message: `ProviderName is required`,
        });

    if (!HOS)
        return res
          .status(400)
          .json({
            status: 400,
            sucess: false,
            message: `HOS ID is required`,
          });    

    if (!providerName)
      return res
        .status(400)
        .json({
          status: 400,
          sucess: false,
          message: `ProviderName is required`,
        });
    if (!action)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Action is required` });
    if (!remark)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Remark is required` });

        const isHospital = await AuditSchema.findOne({HOS}).exec();

      if(!isHospital) return res.status(400).json({ status: 400, sucess: false, message: `Hospital Not Found` });
      if(!isHospital.taskId) return res.status(400).json({ status: 400, sucess: false, message: `Task Not Found` }); 

    next();

  } catch (error) {
    return res
      .status(500)
      .json({
        status: 500,
        sucess: false,
        message: `Internal server error :${error}`,
      });
  }
};

export const checkDelectTask = async(req,res,next) => {
  try {

      const {taskId} = req.body;
      console.log(taskId);

      if(!taskId) return res.status(400) .json({status: 400,sucess: false, message: `TaskId is required`,});

      const isTask = await AuditSchema.findOne({taskId});

      if(!isTask) return res.status(400) .json({status: 400,sucess: false, message: `TaskId Not Found`,});

      next();

  } catch (error) {
    return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
  }
}
