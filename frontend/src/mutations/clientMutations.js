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

export { ADD_NEW_CLIENT };
