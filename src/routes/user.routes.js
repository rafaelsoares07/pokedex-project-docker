import { Router } from "express";
import { signup , signin} from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.post("/user", signup); 
userRouter.get("/user",signin);

export default userRouter;
