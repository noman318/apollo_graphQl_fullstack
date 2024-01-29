import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($input: UserCredentials!) {
    loginUser(input: $input)
  }
`;
export { LOGIN_USER };
