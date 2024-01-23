const projectTypeDefs = `
  type Project {
    id: ID!
    name: String!
    status: String!
    description: String
    userId: ID!
  }

  input ProjectInput {
    name: String!
    status: String!
    description: String
    userId: ID!
  }

  type Query {
    getProjects: [Project]
    getProjectById(id: ID!): Project
  }

  type Mutation {
    createProject(input: ProjectInput!): Project
  }
`;

export default projectTypeDefs;
