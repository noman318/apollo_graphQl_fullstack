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

const GET_CLIENT_BY_ID = gql`
  query GetClientById($getClientByIdId: ID!) {
    getClientById(id: $getClientByIdId) {
      name
      email
      phone
      userId
    }
  }
`;

export { GET_ALL_CLIENTS, GET_CLIENT_BY_ID };
