import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formValidate = () => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const countryRegex = /^[A-Z\s]{2,}$/;
    const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;

    let error = {};
    let isValid = true;

    if (formData.name.trim() === "" || formData.lastname.trim() === "") {
      error.name = "Name and Lastname are required";
      isValid = false;
    } else if (
      !nameRegex.test(formData.name) ||
      !nameRegex.test(formData.lastname)
    ) {
      error.name = "Invalid name or lastname";
      isValid = false;
    }

    if (formData.lastname.trim() === "") {
      error.lastname = "  Lastname is required";
      isValid = false;
    } else if (
      !nameRegex.test(formData.name) ||
      !nameRegex.test(formData.lastname)
    ) {
      error.name = "Invalid name or lastname";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      error.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      error.email = "Invalid email format";
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      error.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      error.phone = "Phone number must be in Nigerian format";
      isValid = false;
    }

    if (formData.country.trim() === "") {
      error.country = "Country is required";
      isValid = false;
    } else if (!countryRegex.test(formData.country)) {
      error.country = "Country must be in capital letters";
      isValid = false;
    }

    if (
      formData.password.trim() === "" ||
      formData.confirm_password.trim() === ""
    ) {
      error.password = "Password and confirmation are required";
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      error.password =
        "Password must have 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character";
      isValid = false;
    } else if (formData.password !== formData.confirm_password) {
      error.confirm_password = "Passwords do not match";
      isValid = false;
    }

    setErrorMessage(error);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidate()) {
      alert("Form submitted successfully!");
      // do your submission logic here
    }
  };

  return (
    <Container className="mt-5 bg-secondary border border-primary border-5 rounded-3 shadow-lg">
      <Card className="shadow-lg p-4">
        <Card.Title className="text-center mb-4 text-primary fs-1 fw-bolder">
          Registration Form
        </Card.Title>
        <Form
          onSubmit={handleSubmit}
          className="text-warning fw-bold fs-5 shadow-lg p-3"
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errorMessage.name && (
                  <p className="error text-danger">{errorMessage.name}</p>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errorMessage.confirm_password && (
                  <p className="error text-danger">
                    {errorMessage.confirm_password}
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="p-2 rounded-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="billclinton@email.com"
            />
            {errorMessage.email && (
              <p className="error text-danger">{errorMessage.email}</p>
            )}
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country"
                />
                {errorMessage.country && (
                  <p className="error text-danger">{errorMessage.country}</p>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 0708456789"
                />
                {errorMessage.phone && (
                  <p className="error text-danger">{errorMessage.phone}</p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {errorMessage.password && (
                  <p className="error text-danger">{errorMessage.password}</p>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="p-2 rounded-4"
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                />
                {errorMessage.confirm_password && (
                  <p className="error text-danger">
                    {errorMessage.confirm_password}
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button
              variant="outline-primary"
              type="submit"
              className="px-5 w-50 rounded-5 p-3"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default MyForm;
