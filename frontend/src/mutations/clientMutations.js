import { gql } from "@apollo/client";

const ADD_NEW_CLIENT = gql`
  mutation CreateClient($input: ClientInput!) {
    createClient(input: $input) {
      id
      name
      email
      phone
      userId
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation DeleteClient($input: String!) {
    deleteClient(input: $input) {
      id
      email
      userId
    }
  }
`;

export { ADD_NEW_CLIENT, DELETE_CLIENT };
