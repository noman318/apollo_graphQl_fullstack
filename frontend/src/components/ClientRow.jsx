import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_ALL_CLIENTS } from "../queries/clientQueries";

const ClientRow = ({ clientData }) => {
  // console.log("clientData", clientData.id);
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { input: clientData.id },
    update(cache, { data: { deleteClient } }) {
      const { getAllClients } = cache.readQuery({ query: GET_ALL_CLIENTS });
      cache.writeQuery({
        query: GET_ALL_CLIENTS,
        data: {
          getAllClients: getAllClients?.filter(
            (item) => item.id !== deleteClient.id
          ),
        },
      });
    },
  });
  return (
    <React.Fragment>
      <tr>
        <td>{clientData?.name}</td>
        <td>{clientData?.email}</td>
        <td>{clientData?.phone}</td>
        <td>
          <Button variant="danger" onClick={deleteClient}>
            Delete <FaTrash />
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default ClientRow;
