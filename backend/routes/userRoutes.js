import express from "express";
import { checkLogin, checkRegister } from "../middleware/userAuth.js";
import { login, register } from "../controller/user.cont.js";

const router = express.Router();

router.post("/register",checkRegister,register);
router.post("/login",checkLogin,login);



export default router;