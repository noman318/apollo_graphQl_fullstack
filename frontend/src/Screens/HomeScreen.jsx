import React from "react";
import { Container } from "react-bootstrap";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";
import Projects from "../components/Projects";

const HomeScreen = () => {
  return (
    <Container>
      <h1>Project Mgmt</h1>
      <AddClientModal />
      <AddProjectModal />
      <br />
      <br />
      <Projects />
      <hr />
      <br />
      <Clients />
    </Container>
  );
};

export default HomeScreen;
