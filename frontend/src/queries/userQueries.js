import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    loginUser(input: $input)
  }
`;

const GET_ALL_USERS = gql`
  query GetUsers {
    getUsers {
      id
      lastName
      email
      firstName
      username
    }
  }
`;
export { LOGIN, GET_ALL_USERS };
