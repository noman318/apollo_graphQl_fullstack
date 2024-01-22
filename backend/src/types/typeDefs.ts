const typeDefs = `#graphql
    type User{
        id:ID!
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
        profileImageUrl:String
        token: String
    } 
    input UserInput{
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
    } 
    type Project {
        id: ID!
        name: String!
        status: String!
        description: String
        userId: ID!
    }
    input ProjectInput{
        name: String!
        status: String!
        description: String
        userId: ID!
    }
    type Query{
        hello: String!
        getUsers: [User]
        getUserById(id:ID!):User
        getProjects: [Project]
        getProjectById(id:ID!):Project
    }
    type Mutation{
        createUser(input:UserInput!): User
        createProject(input:ProjectInput!): Project
    }
`;
export default typeDefs;
