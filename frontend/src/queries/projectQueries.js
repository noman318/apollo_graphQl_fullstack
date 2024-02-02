import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query Query {
    getProjects {
      client {
        name
        email
      }
      name
      status
      description
      id
    }
  }
`;

const GET_SINGLE_PROJECT = gql`
  query GetProjectById($getProjectByIdId: ID!) {
    getProjectById(id: $getProjectByIdId) {
      id
      name
      status
      description
      client {
        name
        email
        phone
        userId
        id
      }
    }
  }
`;

export { GET_ALL_PROJECTS, GET_SINGLE_PROJECT };
