import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { REGISTER_USER } from "../mutations/userMutations";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUser, { data, loading, error }] = useMutation(REGISTER_USER);
  // console.log("data", data?.createUser);

  const registeredUser = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return toast.error("Fill all the Fields to Register");
    } else if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    try {
      let RegisteredThisUser = await createUser({
        variables: {
          input: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: userName,
            password: password,
            age: parseInt(age),
          },
        },
        onCompleted: (data) => {
          // console.log("dataOnCompleted", data);
          toast.success("Registered");
        },
      });
      console.log("RegisteredThisUser", RegisteredThisUser);
      // navigate("/");
    } catch (errors) {
      toast.error(errors.message);
      console.log("error", error);
    }
  };
  // console.log("age", age);
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={registeredUser}>
        <Form.Group className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          Regsiter
        </Button>
      </Form>
      <Link to={`/login`}>Already Signed In ?</Link>
    </FormContainer>
  );
};

export default RegisterScreen;
