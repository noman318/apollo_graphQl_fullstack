import { createUser, getUserById, getUsers } from "../user/userResolvers";

const resolvers = {
  Query: {
    getUserById,
    getUsers,
  },
  Mutation: {
    createUser,
  },
};
export default resolvers;
