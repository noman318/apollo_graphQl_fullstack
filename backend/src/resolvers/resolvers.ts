import {
  createClient,
  deleteClient,
  updateClient,
} from "../client/clientResolvers";
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

    getProjects,
    getProjectById,
    getCurrentUser,
  },
  Mutation: {
    createUser,
    updateUser,
    loginUser,
    deleteUser,

    createProject,
    updateProject,

    createClient,
    updateClient,
    deleteClient,
  },
};
export default resolvers;
