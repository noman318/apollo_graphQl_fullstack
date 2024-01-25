import {
  createProject,
  getProjectById,
  getProjects,
  updateProject,
} from "../project/projectResolver";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  getCurrentUser,
  updateUser,
} from "../user/userResolvers";

const resolvers = {
  Query: {
    getUserById,
    getUsers,
    loginUser,
    getProjects,
    getProjectById,
    getCurrentUser,
  },
  Mutation: {
    createUser,
    updateUser,
    createProject,
    deleteUser,
    updateProject,
  },
};
export default resolvers;
