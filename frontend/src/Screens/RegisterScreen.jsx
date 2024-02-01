import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_USER } from "../mutations/userMutations";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [age, setAge] = useState(0);
  // const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    age: 0,
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const {
    email,
    firstName,
    lastName,
    userName,
    password,
    age,
    confirmPassword,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     Object.values(formData).some((value) => value === "") ||
  //     password !== confirmPassword
  //   ) {
  //     return toast.error(
  //       "Fill all the Fields to Register or Passwords do not match"
  //     );
  //   }
  // };

  const [createUser, { loading, error }] = useMutation(REGISTER_USER);
  // console.log("data", data?.createUser);

  const registeredUser = async (e) => {
    e.preventDefault();
    if (
      Object.values(formData).some((value) => value === "") ||
      password !== confirmPassword
    ) {
      return toast.error(
        "Fill all the Fields to Register or Passwords do not match"
      );
    }

    try {
      await createUser({
        variables: {
          input: {
            firstName,
            lastName,
            email,
            username: userName,
            password,
            age: parseInt(age),
          },
        },
        onCompleted: (data) => {
          // console.log("dataOnCompleted", data);
          toast.success("Registered");
          setFormData(initialFormData);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
      });
      // console.log("RegisteredThisUser", RegisteredThisUser);
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
        {Object.entries(formData).map(([key, value]) => {
          // console.log("key", key);
          // console.log("value", value);
          return (
            <Form.Group key={key} className="mb-2">
              <Form.Label>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Form.Label>
              <Form.Control
                type={
                  key === "password" || key === "confirmPassword"
                    ? "password"
                    : "text"
                }
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                name={key}
                value={value}
                onChange={handleChange}
              />
            </Form.Group>
          );
        })}
        <Button variant="primary" type="submit" disabled={loading}>
          Regsiter
        </Button>
      </Form>
      <Link to={`/login`}>Already Signed In ?</Link>
    </FormContainer>
  );
};

export default RegisterScreen;
