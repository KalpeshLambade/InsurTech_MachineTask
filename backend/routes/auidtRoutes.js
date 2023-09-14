import express from "express"
import { checkAddTask, checkDelectTask } from "../middleware/auditAuth.js";
import { addTask, deletTask, getOldTask, getTask, updateTask } from "../controller/audit.cont.js";

const auidtRouter = express.Router();

auidtRouter.post("/addTask",checkAddTask,addTask)
auidtRouter.get("/getTask",getTask);
auidtRouter.put("/updateTask", updateTask);
auidtRouter.delete("/delectTask",checkDelectTask,deletTask);

auidtRouter.get("/getolddata",getOldTask);

export default auidtRouter;