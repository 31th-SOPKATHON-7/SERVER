import { Router } from "express";
// import userRouter from "./userRouter";
import quizRouter from "./quizRouter";


const router: Router = Router();

// router.use("/user", userRouter);

router.use("/page", quizRouter);


export default router;


