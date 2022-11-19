import { Router } from "express";
import { userController } from "../controller";
import quizController from "../controller/quizController";

const router: Router = Router();

router.get("/:userId", userController.getUser);
router.get("", userController.getUserAll);
router.get("/quiz/:userId", quizController.getAllQuiz);
router.patch("/:userId/edit", userController.updateUser);

export default router;
