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

  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const userController = {
  getUser,
};

export default userController;
