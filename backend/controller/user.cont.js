import bcrypt from "bcrypt";
import Users from "../model/userModel.js";

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
