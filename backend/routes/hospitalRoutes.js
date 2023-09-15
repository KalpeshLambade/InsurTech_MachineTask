import express from "express"
import { checkAddHospitals } from "../middleware/hospitalAuth.js";
import { addHospitals } from "../controller/hospital.cont.js";

const hospitalRouter = express.Router();

hospitalRouter.post("/addhospital",checkAddHospitals,addHospitals)

export default hospitalRouter;