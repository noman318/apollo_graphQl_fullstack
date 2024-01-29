import React from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Regsiter
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
