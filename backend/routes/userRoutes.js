import express from "express";
import { checkRegister } from "../middleware/userAuth.js";
import { register } from "../controller/user.cont.js";

const router = express.Router();

router.post("/register",checkRegister,register);



export default router;