import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCards = ({ projects }) => {
  console.log("projects", projects);
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{projects?.name}</Card.Title>
        <Card.Text>{projects?.description}</Card.Text>
        <Card.Text>
          <b>Project Status: {projects?.status}</b>{" "}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="secondary" href="#">
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
