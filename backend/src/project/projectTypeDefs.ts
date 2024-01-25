const projectTypeDefs = `
  type Project {
    id: ID!
    name: String!
    status: String!
    description: String
    user: User
  }

  input ProjectInput {
    name: String!
    status: String!
    description: String
    userId: ID!
  }

  input ProjectUpdateInput {
    name: String
    status: String
    description: String
    userId: ID!
  }

  type Query {
    getProjects: [Project]
    getProjectById(id: ID!): Project
  }

  type Mutation {
    createProject(input: ProjectInput!): Project
    updateProject(id:ID!,input: ProjectUpdateInput): Project
  }
`;

export default projectTypeDefs;
