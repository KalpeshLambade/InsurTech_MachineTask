import Users from "../model/userModel.js";

export const checkRegister = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    if (!username)
      return res
        .status(400)
        .json({ status: 400, sucess: false, meassage: `Username not found` });
    if (!password)
      return res
        .status(400)
        .json({ status: 400, sucess: false, meassage: `password not found` });
    if (!email)
      return res
        .status(400)
        .json({ status: 400, sucess: false, meassage: `email not found` });

    const isUser = await Users.findOne({ email });

    if (isUser)
      return res
        .status(400)
        .json({ status: 400, sucess: false, meassage: `User already found` });

    next();
  } catch (error) {
    return res.status(500).json({
      status: 500,
      sucess: false,
      message: `Internal server error :${error}`,
    });
  }
};
