import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { quizService } from "../service";

const getAllQuizs = async (req: Request, res: Response) => {
  
    const quiz = await quizService.getAllQuiz();
  const data ={
    quiz,
  };

    if (!data) {
      return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, message: "개인 퀴즈 조회 성공", data});
  };

  const quizController = {
    getAllQuizs,
  };
  
  export default quizController;