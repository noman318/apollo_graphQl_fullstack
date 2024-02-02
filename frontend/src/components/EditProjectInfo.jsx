import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

const EditProjectInfo = ({ project }) => {
  //   console.log("project", project);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  //   console.log("token", token);
  const [updateProject, { loading: isLoading }] = useMutation(UPDATE_PROJECT);

  const initialForm = {
    name: project.name,
    status: project.status,
    description: project.description,
  };
  const [formData, setFormData] = useState(initialForm);
  const { name, description, status } = formData;

  const statusStrings = [
    { key: "NotStarted", value: "Not Started" },
    { key: "InProgress", value: "In Progress" },
    { key: "Completed", value: "Completed" },
  ];
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Fill all the fields to add new client");
    } else {
      try {
        await updateProject({
          variables: {
            updateProjectId: id,
            input: {
              description,
              name,
              status,
            },
          },
          context: {
            headers: {
              token,
            },
          },
          refetchQueries: [
            { query: GET_SINGLE_PROJECT, variables: { getProjectByIdId: id } },
          ],
        });
        toast.success("Updated");
        setFormData(initialForm);
      } catch (errors) {
        console.log("errors", errors);
        toast.error(`${errors}`);
      }
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form onSubmit={handleUpdateProject}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={formData.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select
          // onChange={(e) => setStatus(e.target.value)}
          onChange={handleChange}
          name="status"
          value={formData.status}
        >
          <option>Status</option>
          {statusStrings?.map((data) => (
            <React.Fragment key={data.key}>
              <option value={data.key}>{data.value}</option>
            </React.Fragment>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="dark" disabled={isLoading} type="submit">
        Update
      </Button>
    </Form>
  );
};

export default EditProjectInfo;
