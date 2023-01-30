import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email,
      password,
    };
    console.log(user);
  };

  return (
    <div className="custom-bgc form d-flex justify-content-center align-items-center">
      <Card className="form-card shadow-sm rounded-1 mx-4">
        <Card.Body>
          <Card.Title className="text-center fs-3 custom-font fw-semibold">
            Login
          </Card.Title>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="custom-font fw-semibold mb-0">
                Email
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2 input"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="custom-font fw-semibold mb-0">
                Password
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit-btn border-0 btn rounded-1 fw-semibold mt-3"
            >
              Login
            </Button>{" "}
            <p className="text-center fw-semibold my-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none custom-color">
                Signup
              </Link>
            </p>
            <h5 className="text-center">Or</h5>
            <div className="d-flex justify-content-center my-4">
              <GoogleSignIn></GoogleSignIn>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
