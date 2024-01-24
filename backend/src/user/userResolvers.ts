import { createHmac } from "node:crypto";
import { prismaClient } from "../lib/db";
import jwt from "jsonwebtoken";

type UserInput = {
  input: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  };
};

type Login = {
  input: {
    email: string;
    password: string;
  };
};

const createUser = async (_: any, args: UserInput) => {
  // console.log("args", args.input);
  const { firstName, lastName, email, username, password } = args.input;
  // console.log("firstName", firstName);
  // console.log("process.env.SECRET", process.env.SECRET);
  const hashedPassword = createHmac("sha256", String(process.env.SECRET))
    .update(password)
    .digest("hex");
  console.log("hashedPassword", hashedPassword);

  const user = await prismaClient.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
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
    throw Error("Invalid EMail or Password");
  } else {
    const token = jwt.sign(
      {
        id: user.id,
        firstname: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      String(process.env.SECRET)
    );
    return token;
  }
};

const getUserById = async (_: any, args: String) => {
  console.log("args", args);
  // return;
  const user = await prismaClient.user.findUnique({
    where: {
      //@ts-expect-error
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
export { createUser, getUserById, getUsers, loginUser };
