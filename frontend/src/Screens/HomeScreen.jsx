import React from "react";
import { Container } from "react-bootstrap";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";

const HomeScreen = () => {
  // const { getAllClients } = data;
  // console.log("getAllClients", getAllClients);
  return (
    <Container>
      <h1>Project Mgmt</h1>
      <AddClientModal />
      <br />
      <br />
      <Clients />
    </Container>
  );
};

export default HomeScreen;
