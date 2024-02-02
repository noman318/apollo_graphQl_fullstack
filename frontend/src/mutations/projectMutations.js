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

const UPDATE_PROJECT = gql`
  mutation Mutation($updateProjectId: ID!, $input: ProjectUpdateInput) {
    updateProject(id: $updateProjectId, input: $input) {
      name
      id
      status
      description
      client {
        id
        name
        email
        phone
        userId
      }
    }
  }
`;

export { CREATE_NEW_PROJECT, UPDATE_PROJECT };
