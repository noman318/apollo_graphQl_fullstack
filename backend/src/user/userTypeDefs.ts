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
    age: Int
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
    age: Int
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    age: Int
    email: String
    username: String
    password: String
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
    updateUser(id:ID!,input: UserUpdateInput): User
  }
`;

export default userTypeDefs;
