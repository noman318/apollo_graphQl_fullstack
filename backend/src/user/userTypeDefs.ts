const userTypeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    profileImageUrl: String
    token: String
  }

  type LoginUser {
    id: ID
    firstName: String
    lastName: String
    email: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
  }

    input UserCredentials {
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
    loginUser(input:UserCredentials!):String
    getCurrentUser: LoginUser
  }

  type Mutation {
    createUser(input: UserInput!): User
    deleteUser(input: String!): Int
  }
`;

export default userTypeDefs;
