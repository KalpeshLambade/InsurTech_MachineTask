
import AuditSchema from "../model/auditModel.js";
import OldAuditSchema from "../model/oldAuditModel.js"

export const checkAddTask = async (req, res, next) => {
  try {
    const { providerName, action, remark } = req.body;

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
    const { taskId,providerName, action, remark } = req.body;

    if (!taskId)
      return res
        .status(400)
        .json({
          status: 400,
          sucess: false,
          message: `ProviderName is required`,
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

        const oldTask = await AuditSchema.findOne({taskId}).exec();

        if(!oldTask)  return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Task Not Found` });

        const oldData = new OldAuditSchema({
            taskId:oldTask.taskId,
            hostId:oldTask.hostId,
            providerName:oldTask.providerName,
            action:oldTask.action,
            remark:oldTask.remark
        })

        await oldData.save();

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

      if(!taskId) return res.status(400) .json({status: 400,sucess: false, message: `TaskId is required`,});

      const isTask = await AuditSchema.findOne({taskId});

      if(!isTask) return res.status(400) .json({status: 400,sucess: false, message: `TaskId Not Found`,});

      next();

  } catch (error) {
    return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
  }
}
