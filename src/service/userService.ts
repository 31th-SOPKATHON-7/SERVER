import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//유저 조회
const getUser = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });

  return user;
};

const getUserAll = async () => {
  const user = await prisma.user.findMany();
  return user;
};

const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      nickName: name,
    },
  });
  return data;
};

const userService = {
  getUser,
  getUserAll,
  updateUser,
};

export default userService;
