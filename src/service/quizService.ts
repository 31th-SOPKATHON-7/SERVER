import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

// answerId로 퀴즈 조회
const getAllQuiz = async () => {
  const quiz = await prisma.answer.findMany();

  return quiz;
};

const quizService = {
    getAllQuiz,
  };
  
  export default quizService;
