import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import { toast } from "react-hot-toast";
import FbAuthentication from "../../components/FbAuthentication/FbAuthentication";

const SignUp = () => {
  const navigate = useNavigate();




  // register function start 
  const handleSignUp = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const role = e.target.role.value;
    const username = e.target.username.value;
    const user = {
      role, username, userEmail, userPassword
    };
    console.log(user);

    try {
      fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success('SignUp Successfull')
        });
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
    navigate("/login");
  };

  return (
    <div className="custom-bgc form d-flex justify-content-center align-items-center">
      <Card className="form-card shadow-sm rounded-1 mx-4">
        <Card.Body>
          <Card.Title className="text-center fs-3 custom-font fw-semibold">
            Sign Up
          </Card.Title>

          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Label className="custom-font fw-semibold mb-0">
                Select Your Role
              </Form.Label>
              <Form.Select className="mb-3" name="role" aria-label="Default select example">
                <option  value="User">User</option>
                <option value="Admin">Admin</option>
              </Form.Select>

              <Form.Label className="custom-font fw-semibold mb-0">
                User Name
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2 input"
                type="text"
                name="username"
                placeholder="Enter your email"
              />

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
            <Button type="submit" className="submit-btn border-0 btn rounded-1 fw-semibold mt-3">
              Sign Up
            </Button>{" "}
            <p className="text-center fw-semibold my-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none custom-color">
                Login
              </Link>
            </p>
            <h5 className="text-center">Or</h5>
            <div className="d-flex justify-content-center my-4">
              <GoogleSignIn></GoogleSignIn><FbAuthentication></FbAuthentication>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
