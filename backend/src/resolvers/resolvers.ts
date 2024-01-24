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
  },
};
export default resolvers;
