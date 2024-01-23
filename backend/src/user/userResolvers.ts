import { prismaClient } from "../lib/db";

type UserInput = {
  input: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  };
};

const createUser = async (_: any, args: UserInput) => {
  console.log("args", args.input);
  const { firstName, lastName, email, username, password } = args.input;
  // console.log("firstName", firstName);

  const user = await prismaClient.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
      password,
      salt: "",
    },
  });
  // console.log("user", user);
  return user;
};

export { createUser };
