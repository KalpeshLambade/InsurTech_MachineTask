export const checkAddTask = async (req, res) => {

  const { providerName, action, remark } = req.body;

  if(!providerName) return res.status(400).json({status:400,sucess:false,message:`ProviderName is required`});
  if(!action) return res.status(400).json({status:400,sucess:false,message:`Action is required`});
  if(!remark) return res.status(400).json({status:400,sucess:false,message:`Remark is required`});


};
