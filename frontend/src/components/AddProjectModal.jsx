import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { GoProjectRoadmap } from "react-icons/go";
import { GET_ALL_CLIENTS } from "../queries/clientQueries";
import { CREATE_NEW_PROJECT } from "../mutations/projectMutations";

const AddProjectModal = () => {
  const initialForm = {
    name: "",
    status: "",
    description: "",
    clientId: "",
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState(initialForm);
  const { data } = useQuery(GET_ALL_CLIENTS);
  const [createProject, { loading }] = useMutation(CREATE_NEW_PROJECT);
  const { name, description, status, clientId } = formData;
  const statusStrings = [
    { key: "NotStarted", value: "Not Started" },
    { key: "InProgress", value: "In Progress" },
    { key: "Completed", value: "Completed" },
  ];
  const handleAddNewClient = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Fill all the fields to add new client");
    } else {
      try {
        await createProject({
          variables: {
            input: {
              name,
              status,
              description,
              clientId,
            },
          },
        });
        toast.success("Client Added");
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
  console.log("formData", formData);
  return (
    <React.Fragment>
      <Button variant="dark" className="mx-3" onClick={handleShow}>
        <GoProjectRoadmap style={{ marginRight: "10px" }} />
        New Project
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewClient}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                // onChange={(e) => setStatus(e.target.value)}
                onChange={handleChange}
                name="status"
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
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Client</Form.Label>
              <Form.Select onChange={handleChange} name="clientId">
                <option>Client</option>
                {data?.getAllClients?.map((data, _) => (
                  <React.Fragment key={data?.id}>
                    <option value={data?.id}>{data.name}</option>
                  </React.Fragment>
                ))}
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                disabled={loading}
                type="submit"
              >
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddProjectModal;
