import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCards = ({ projects }) => {
  console.log("projects", projects);
  return (
    <Card className="m-3 d-flex flex-row align-items-center">
      <Card.Body>
        <Card.Title>{projects?.name}</Card.Title>
        <Card.Text>{projects?.description}</Card.Text>
        {/* <Card.Text>
          <b>Project Status: {projects?.status}</b>{" "}
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Link to={`/view/${projects.id}`}>
          <Button
            variant="secondary"
            className="d-flex flex-row align-items-center"
          >
            <FaEye style={{ marginRight: "15px" }} />
            View
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
