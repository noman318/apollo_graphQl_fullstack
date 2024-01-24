import { prismaClient } from "../lib/db";
import { createHmac } from "node:crypto";

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

class UserService {
  public static createUser(input: CreateUserPayload) {
    const { firstName, lastName, email, username, password } = input;
    const hashedPassword = createHmac("sha256", String(process.env.SECRET))
      .update(password)
      .digest("hex");
    console.log("hashedPassword", hashedPassword);
    prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        username,
        password: hashedPassword,
      },
    });
  }
}

export default UserService;
