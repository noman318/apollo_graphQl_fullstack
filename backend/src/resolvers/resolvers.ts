import {
  createClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} from "../client/clientResolvers";
import {
  createProject,
  deleteProject,
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

    getAllClients,
    getClientById,
  },
  Mutation: {
    createUser,
    updateUser,
    loginUser,
    deleteUser,

    createProject,
    updateProject,
    deleteProject,

    createClient,
    updateClient,
    deleteClient,
  },
};
export default resolvers;
