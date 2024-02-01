const projectTypeDefs = `
  type Project {
    id: ID!
    name: String!
    status: String!
    description: String
    client: Client
  }

  type ProjectADD {
    id: ID!
    name: String!
    status: String!
    description: String
    clientId: ID
  }

  input ProjectInput {
    name: String!
    status: String!
    description: String
    clientId: ID!
  }

  input ProjectUpdateInput {
    name: String
    status: String
    description: String
    clientId: ID!
  }

  type Query {
    getProjects: [Project]
    getProjectById(id: ID!): Project
  }

  type Mutation {
    createProject(input: ProjectInput!): ProjectADD
    updateProject(id:ID!,input: ProjectUpdateInput): Project
    deleteProject(id:ID!):Project
  }
`;

export default projectTypeDefs;
