import {
  createProject,
  getProjectById,
  getProjects,
} from "../project/projectResolver";
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
    getProjects,
    getProjectById,
  },
  Mutation: {
    createUser,
    createProject,
  },
};
export default resolvers;
