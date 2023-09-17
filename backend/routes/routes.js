import express from "express";
import { checkLogin, checkRegister } from "../middleware/userAuth.js";
import { login, register } from "../controller/user.cont.js";
import { checkAddHospitals } from "../middleware/hospitalAuth.js";
import { addHospitals, getHospitals } from "../controller/hospital.cont.js";
import { checkAddTask, checkDelectTask, checkUpdateTask } from "../middleware/auditAuth.js";
import { addTask, deletTask, getTask, updateTask } from "../controller/audit.cont.js";

const router = express.Router();

//User Routes
router.post("/register",checkRegister,register);
router.post("/login",checkLogin,login);

//Hospital Routes
router.post("/addhospital",checkAddHospitals,addHospitals);
router.get("/gethospital",getHospitals);

//Audit Routes
router.post("/addTask",checkAddTask,addTask)
router.get("/getTask",getTask);
router.put("/updateTask",checkUpdateTask,updateTask);
router.delete("/delectTask/:id",checkDelectTask,deletTask);

export default router;