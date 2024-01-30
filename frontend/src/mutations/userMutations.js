import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($input: UserCredentials!) {
    loginUser(input: $input)
  }
`;
const REGISTER_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      firstName
      lastName
      email
      username
      password
      age
    }
  }
`;
export { LOGIN_USER, REGISTER_USER };
