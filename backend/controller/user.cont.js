import bcrypt from "bcrypt";
import Users from "../model/userModel.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashPass = await bcrypt.hash(password, 10);

    const addUser = new Users({
      username,
      password: hashPass,
      email,
    });

    
    await addUser.save();

    return res.status(201).json({status:201, sucess:true, message:`User Registered sucessully!`});


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

export const login = async(req,res) => {
  try {
    const {email, password} = req.body;

    const getUser = await Users.findOne({email}).exec();

    if(getUser){
      const decPass = await bcrypt.compare(password, getUser.password);

      if(!decPass) return  res.status(400).json({status:400, sucess:false, message:`Creditial not match`});
      
      const token = jwt.sign({id:getUser._id},process.env.SECRET);

      const userData = {id:getUser._id, email:getUser.email, username:getUser.username,role:getUser.role};

      return res.status(200).json({status:200, sucess:true, message:`Login sucessful!`, userData, token })

    }

  } catch (error) {
    return res.status(500) .json({status: 500,sucess: false, message: `Internal server error :${error}`,});
  }
}

export const verifyToken = async(req,res) => {
  try {

    const {token} = req.body;

    const decToken = jwt.verify(token, process.env.SECRET);

    if(!decToken) return res.status(400).json({status:400,sucess:false, message:`Invalid Token`});

    const userId = decToken.id;

    const getUserData = await Users.findById(userId).select("-password").exec();
    
    if(!getUserData) return res.status(400).json({status:400,sucess:false, message:`No User found`});

    const userData = {id:getUserData._id, email:getUserData.email, username:getUserData.username,role:getUserData.role};

    return res.status(200).json({status:200, sucess:true, message:`Login sucessful!`, userData})

 
  } catch (error) {
    return res.status(500).json({status: 500,sucess: false,message: `Internal server error :${error}`,});
  }
}