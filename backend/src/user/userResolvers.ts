import { createHmac } from "node:crypto";
import { prismaClient } from "../lib/db";
import jwt from "jsonwebtoken";
import checkAuthorization from "../middleware/authentication";

type UserInput = {
  input: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    age?: number;
  };
};

type Login = {
  input: {
    email: string;
    password: string;
  };
};

type ProjectUpdateInput = {
  id: string;
  input: {
    firstName?: string;
    lastName?: string;
    email?: string;
    username?: string;
    age?: number;
    password?: string;
  };
};

const createUser = async (_: any, args: UserInput) => {
  // console.log("args", args.input);
  const { firstName, lastName, email, username, password, age } = args.input;
  // console.log("firstName", firstName);

  const hashedPassword = createHmac("sha256", String(process.env.SECRET))
    .update(password)
    .digest("hex");
  // console.log("hashedPassword", hashedPassword);

  const user = await prismaClient.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
      age,
      password: hashedPassword,
    },
  });
  // console.log("user", user);
  return user;
};

const loginUser = async (_: any, args: Login) => {
  // console.log("args", args);

  const { email, password } = args.input;
  const user = await prismaClient.user.findUnique({ where: { email } });
  // console.log("user", user);
  if (!user) throw Error("User not Found");

  const usersHashedPassword = createHmac("sha256", String(process.env.SECRET))
    .update(password)
    .digest("hex");

  if (usersHashedPassword !== user.password) {
    throw Error("Invalid Email or Password");
  } else {
    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      String(process.env.SECRET)
    );
    return token;
  }
};

const getUserById = async (_: any, args: { id: string }, context: any) => {
  // console.log("args", args);
  // console.log("context", context);
  const user = await prismaClient.user.findUnique({
    where: {
      id: args.id,
    },
  });
  return user;
};
const getUsers = async (_: any, args: String) => {
  const users = await prismaClient.user.findMany();
  // console.log("users", users);
  return users;
};

const getCurrentUser = async (_: any, args: any, context: any) => {
  // console.log("context", context);
  if (context) {
    return context;
  } else {
    throw new Error("Unauthorized User");
  }
};

const deleteUser = async (_: any, args: { input: string }, context: any) => {
  const { input } = args;
  // console.log("input", input);
  checkAuthorization(context);
  const deletedUsers = await prismaClient.user.deleteMany({
    where: { password: input },
  });
  // console.log("deletedUsers", deletedUsers.count);
  const { count } = deletedUsers;
  return count;
};

const updateUser = async (_: any, args: ProjectUpdateInput, context: any) => {
  const { id } = args;
  const { firstName, lastName, age, email, username } = args.input;
  checkAuthorization(context);
  const updatedUser = await prismaClient.user.update({
    where: { id },
    data: {
      firstName,
      lastName,
      age,
      email,
      username,
    },
  });
  return updatedUser;
};
export {
  createUser,
  getUserById,
  getUsers,
  loginUser,
  deleteUser,
  getCurrentUser,
  updateUser,
};
