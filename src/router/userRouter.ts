import { Router } from "express";
import { userController } from "../controller";
import quizController from "../controller/quizController";

const router: Router = Router();

router.get("/:userId", userController.getUser);
router.get("", userController.getUserAll);
router.get("/quiz/:userId", quizController.getAllQuiz);

export default router;
