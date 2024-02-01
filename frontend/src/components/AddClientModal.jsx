import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { GET_ALL_USERS } from "../queries/userQueries";
import { ADD_NEW_CLIENT } from "../mutations/clientMutations";
const AddClientModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const { email, name, phone } = formData;
  const [userId, setUserId] = useState("");
  const { data } = useQuery(GET_ALL_USERS);
  // eslint-disable-next-line no-unused-vars
  const [createClient, { loading, error }] = useMutation(ADD_NEW_CLIENT);
  const handleAddNewClient = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Fill all the fields to add new client");
    }
    try {
      await createClient({
        variables: {
          input: {
            email,
            name,
            phone,
            userId,
          },
        },
      });
      toast.success("Client Added");
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
      <Button variant="primary" onClick={handleShow}>
        Add new Client
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewClient}>
            {Object.entries(formData)?.map(([key, value]) => {
              return (
                <Form.Group key={key} className="mb-3">
                  <Form.Label>
                    {key?.charAt(0)?.toUpperCase() + key.slice(1)}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={key?.charAt(0)?.toUpperCase() + key.slice(1)}
                    autoFocus
                    name={key}
                    value={value}
                    onChange={handleChange}
                  />
                </Form.Group>
              );
            })}
            <Form.Label>User</Form.Label>
            <Form.Select onChange={(e) => setUserId(e.target.value)}>
              <option>User</option>
              {data?.getUsers?.map((data, _) => (
                <React.Fragment key={data?.id}>
                  <option value={data?.id}>
                    {data.firstName} {data.lastName}
                  </option>
                </React.Fragment>
              ))}
            </Form.Select>
            {/* <Form.Group className="mb-3">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
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

export default AddClientModal;
