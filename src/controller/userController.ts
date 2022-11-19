import { Request, Response } from "express";
import { userService } from "../service";

const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = await userService.getUser(+userId);

  if (!user) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }

  const data = {
    user: {
      ...user,
    },
  };
  return res
    .status(200)
    .json({ status: 200, message: "개인 화면 조회 성공", data });
};

const getUserAll = async (req: Request, res: Response) => {
  const user = await userService.getUserAll();
  const data = {
    user,
  };
  return res
    .status(200)
    .json({ status: 200, message: "홈 화면 조회 성공", data });
};

const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;
  if (!name) {
    return res.status(400).json({ status: 400, message: "유저 업데이트 실패" });
  }
  const updateUser = await userService.updateUser(+userId, name);
  const data = {
    updateUser,
  };
  return res
    .status(200)
    .json({ status: 200, message: "유저 업데이트 성공", name });
};

const userController = {
  getUser,
  getUserAll,
  updateUser,
};

export default userController;
