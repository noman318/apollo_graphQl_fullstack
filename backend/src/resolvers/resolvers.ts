import { createProject } from "../project/projectResolver";
import {
  createUser,
  getUserById,
  getUsers,
  loginUser,
} from "../user/userResolvers";

const resolvers = {
  Query: {
    getUserById,
    getUsers,
    loginUser,
  },
  Mutation: {
    createUser,
    createProject,
  },
};
export default resolvers;
