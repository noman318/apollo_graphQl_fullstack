import { gql } from "@apollo/client";

const GET_ALL_CLIENTS = gql`
  query GetAllClients {
    getAllClients {
      name
      email
      phone
      id
      userId
    }
  }
`;

export { GET_ALL_CLIENTS };
