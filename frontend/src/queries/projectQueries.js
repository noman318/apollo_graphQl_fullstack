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

export { GET_ALL_PROJECTS };
