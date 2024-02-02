import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { GoProjectRoadmap } from "react-icons/go";

const AddProjectModal = () => {
  const initialForm = {
    email: "",
    name: "",
    phone: "",
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState(initialForm);
  const [clientId, setClientId] = useState("");

  const handleAddNewClient = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Fill all the fields to add new client");
    }
    try {
    } catch (errors) {
      console.log("errors", errors);
      toast.error(`${errors}`);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <React.Fragment>
      <Button variant="dark" className="mx-3" onClick={handleShow}>
        <GoProjectRoadmap style={{ marginRight: "10px" }} />
        Add new Project
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewClient}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>User</Form.Label>
            <Form.Select onChange={(e) => setClientId(e.target.value)}>
              <option>User</option>
              {/* {data?.getUsers?.map((data, _) => (
                <React.Fragment key={data?.id}>
                  <option value={data?.id}>
                    {data.firstName} {data.lastName}
                  </option>
                </React.Fragment>
              ))} */}
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                // disabled={loading}
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
