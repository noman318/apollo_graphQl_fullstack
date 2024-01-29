import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    loginUser(input: $input)
  }
`;
export { LOGIN };
