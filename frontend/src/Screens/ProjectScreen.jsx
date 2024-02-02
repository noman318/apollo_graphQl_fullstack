import React from "react";
import { Container, Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ClientInfo from "../components/ClientInfo";
import EditProjectInfo from "../components/EditProjectInfo";

const ProjectScreen = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_SINGLE_PROJECT, {
    variables: { getProjectByIdId: id },
  });

  const projectData = data?.getProjectById;
  //   console.log("projectData", projectData);
  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong</h4>;
  return (
    <React.Fragment>
      {!loading && !error && (
        <>
          <Container>
            <Link to="/" className="mb-4">
              <Button variant="btn-light border border-3">Back</Button>
            </Link>
            <div className="m-3">
              <h4>Name : {projectData?.name}</h4>
              <p>Description: {projectData?.description}</p>
              <h5 className="mt-3">Project Status</h5>
              <p className="lead">{projectData?.status}</p>
              <div className="m-5">
                <ClientInfo client={projectData?.client} />
                <br />
                <br />
                <h4>Update Project Info</h4>
                <EditProjectInfo project={projectData} />
              </div>
            </div>
          </Container>
        </>
      )}
    </React.Fragment>
  );
};

export default ProjectScreen;
