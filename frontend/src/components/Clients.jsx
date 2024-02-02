import React from "react";
import ClientRow from "./ClientRow";
import { GET_ALL_CLIENTS } from "../queries/clientQueries";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";
import { Table } from "react-bootstrap";
const Clients = () => {
  const { data, loading, error } = useQuery(GET_ALL_CLIENTS);
  //   console.log("data", data?.getAllClients);
  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong</h4>;
  return (
    <React.Fragment>
      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getAllClients.map((data) => (
              <ClientRow key={data.id} clientData={data} />
            ))}
          </tbody>
        </Table>
      )}
    </React.Fragment>
  );
};

export default Clients;
