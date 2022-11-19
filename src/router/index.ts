import { Router } from "express";
import userRouter from "./userRouter";

const router: Router = Router();

router.use("/page", userRouter);

export default router;
