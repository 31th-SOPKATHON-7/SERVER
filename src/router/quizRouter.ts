import { Router } from "express";
import quizController from "../controller/quizController";

const router: Router = Router();

router.get("/", quizController.getAllQuizs);

export default router;