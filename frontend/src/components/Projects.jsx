import React from "react";
import { useQuery } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import Loader from "./Loader";
import { GET_ALL_PROJECTS } from "../queries/projectQueries";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <Loader />;
  if (error) return <p>Something went wrong</p>;
  return (
    <div>
      {!loading && !error && (
        <>
          <h1>Projects</h1>
          {data?.getProjects.length > 0 ? (
            <>
              <Row xs={1} sm={1} md={2} xl={3}>
                {data.getProjects?.map((project) => (
                  <Col>
                    <ProjectCards projects={project} key={project.id} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <>
              <h3>No Projects created</h3>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
