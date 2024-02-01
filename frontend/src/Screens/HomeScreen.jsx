import React from "react";
import { Container } from "react-bootstrap";
import AddClientModal from "../components/AddClientModal";
const HomeScreen = () => {
  return (
    <Container>
      <h1>Home Screen</h1>
      <AddClientModal />
    </Container>
  );
};

export default HomeScreen;
