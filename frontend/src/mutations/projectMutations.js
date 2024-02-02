import { gql } from "@apollo/client";

const CREATE_NEW_PROJECT = gql`
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
      id
      name
      status
      description
      clientId
    }
  }
`;

export { CREATE_NEW_PROJECT };
