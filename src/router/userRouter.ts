import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

// 유저 정보 생성 POST api/user
router.post("/", [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],userController.createUser);

// 전체 유저 정보 조회  GET api/user
router.get("/", userController.getAllUser);

// 유저 정보 업데이트 PATCH api/user/:userId
router.patch("/:userId", userController.updateUser);

// 유저 정보 삭제  DELETE api/user/:userId
router.delete("/:userId", userController.deleteUser);

export default router;
