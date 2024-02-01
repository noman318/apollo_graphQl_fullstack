const clientTypeDefs = `
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String
    userId: String!
  }

  input ClientInput {
    name: String!
    email: String!
    phone: String
    userId: String!
  }

  input ClientUpdateInput {
    name: String
    email: String
    phone: String
    userId: String!
  }

  type Query {
    getAllClients: [Client]
    getClientById(id: ID!): Client
  }

  type Mutation {
    createClient(input: ClientInput!): Client
    deleteClient(input: String!): Client
    updateClient(id:ID!,input: ClientUpdateInput): Client
  }
`;

export default clientTypeDefs;
