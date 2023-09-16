import express from "express"
import { checkAddTask, checkDelectTask, checkUpdateTask } from "../middleware/auditAuth.js";
import { addTask, deletTask, getBackup, getTask, updateTask } from "../controller/audit.cont.js";

const auidtRouter = express.Router();

auidtRouter.post("/addTask",checkAddTask,addTask)
auidtRouter.get("/getTask",getTask);
auidtRouter.put("/updateTask",checkUpdateTask,updateTask);
auidtRouter.delete("/delectTask/:id",checkDelectTask,deletTask);

auidtRouter.get("/getolddata",getBackup);

export default auidtRouter;