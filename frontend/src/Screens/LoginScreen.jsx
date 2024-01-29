import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../mutations/userMutations";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  console.log("data,loading,error", data, loading, error);
  const loginInUser = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return alert("Fill all the Fields to Sign In");
    }
    try {
      let signedUser = await loginUser({
        variables: {
          input: {
            email: email,
            password: password,
          },
        },
      });
      console.log("signedUser", signedUser);
      // navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={loginInUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          Sign In
        </Button>
        <Link to={`/register`}>New User ?</Link>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
