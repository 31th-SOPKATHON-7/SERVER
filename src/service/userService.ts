// import { PrismaClient } from "@prisma/client";
// import { UserCreateDTO } from "../interfaces/UserCreateDto";
// import bcrypt from 'bcryptjs'

// const prisma = new PrismaClient();

// // userId로 유저 조회
// const getUserById = async (userId: number) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   return user;
// };


// //* 유저 생성
// const createUser = async (userCreateDto: UserCreateDTO) => {
//   //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
//   const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
//   const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

//   const data = await prisma.user.create({
//     data: {
//       userName: userCreateDto?.name,
//       age: userCreateDto?.age,
//       email: userCreateDto.email,
//       password,
//     },
//   });

//   return data;
// };


// // 유저 정보 전체 조회
// const getAllUser = async () => {
//   const data = await prisma.user.findMany();

//   return data;
// };

// // 유저 정보 수정
// const updateUser = async (userId: number, name: string) => {
//   const data = await prisma.user.update({
//     where: {
//       id: userId
//     },
//     data: {
//       userName: name
//     }
//   });

//   return data;
// };

// // 유저 정보 삭제
// const deleteUser = async (userId: number) => {
//   await prisma.user.delete({
//     where: {
//       id: userId
//     }
//   });
// };


// const userService = {
//   getUserById,
//   createUser,
//   getAllUser,
//   updateUser,
//   deleteUser,
// };

// export default userService;
