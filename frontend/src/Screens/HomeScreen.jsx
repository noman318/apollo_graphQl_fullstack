import React from "react";
import { Container } from "react-bootstrap";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";

const HomeScreen = () => {
  return (
    <Container>
      <h1>Project Mgmt</h1>
      <AddClientModal />
      <AddProjectModal />
      <br />
      <br />
      <Clients />
    </Container>
  );
};

export default HomeScreen;
