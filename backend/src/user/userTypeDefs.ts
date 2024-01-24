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
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`;

export default userTypeDefs;
