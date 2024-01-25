import {
  createProject,
  getProjectById,
  getProjects,
} from "../project/projectResolver";
import {
  createUser,
  deleteUser,
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
    deleteUser,
  },
};
export default resolvers;
