export const userQueries = `#graphql
     type Query{
        getUsers: [User]
        getUserById(id:ID!):User
        getProjects: [Project]
        getProjectById(id:ID!):Project
    }`;
