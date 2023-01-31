import React from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import FbAuthentication from "../../components/FbAuthentication/FbAuthentication";

const Login = () => {

  const navigate = useNavigate();
  const { setUser, user } = useContext(AuthContext)
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const token = localStorage.getItem('token');
  if(token){
    navigate(from, { replace: true });
  }


  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const user = {
  //     email,
  //     password,
  //   };
  //   console.log(user);
  // };

  // login functions start 
  const handleLogin = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const user = { userEmail, userPassword };

    try {
      fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
          e.target.reset();
          toast.success('Login Successfull');
        });
    }
    catch (error) {
      console.log(error);
    }
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
              <GoogleSignIn></GoogleSignIn><FbAuthentication></FbAuthentication>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
