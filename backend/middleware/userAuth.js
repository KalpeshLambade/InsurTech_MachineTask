import Users from "../model/userModel.js";
import { validateEmail } from "../utils/emailValidator.js";
import { validatePassword } from "../utils/passwordValidator.js";

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

    try {
      validateEmail(email);
      validatePassword(password);

      const isUser = await Users.findOne({ email }).exec();

      if (isUser)
        return res
          .status(400)
          .json({ status: 400, sucess: false, meassage: `User already found` });

      next();
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `${error}` });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      sucess: false,
      message: `Internal server error :${error}`,
    });
  }
};

export const checkLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Email is required` });
    if (!password)
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `Password is required` });

    try {
      validateEmail(email);
      validatePassword(password);

      const isUser = await Users.findOne({ email }).exec();

      if (!isUser)
        return res
          .status(400)
          .json({ status: 400, sucess: false, message: `No User Found` });

      next();
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, sucess: false, message: `${error}` });
    }
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
