import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "./WalletForm.css";

const WalletForm = () => {
  const [verified, setVerified] = useState(false);
  const handleRecaptcha = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  const handleWalletSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const walletAddress = form.walletAddress.value;
    const requestType = form.requestType.value;
    const amount = form.amount.value;
    console.log(walletAddress, requestType, amount);
  };

  return (
    <div className="wallet-form mt-3">
      <Form onSubmit={handleWalletSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="custom-color custom-font fs-6 fw-semibold">
            Wallet Address
          </Form.Label>
          <Form.Control
            name="walletAddress"
            type="text"
            placeholder="Wallet Address..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="custom-color custom-font fs-6 fw-semibold">
            Request Type
          </Form.Label>
          <div className="d-flex ">
            <Form.Control
              name="requestType"
              className="w-50 me-2 requestType"
              type="text"
              disabled
              value={"20 Test Link"}
              placeholder="20 Test Link"
            />
            <Form.Control
              name="amount"
              className="w-50 ms-2 amount"
              type="text"
              disabled
              value={"0.5 ETH"}
              placeholder="0.5 ETH"
            />
          </div>
        </Form.Group>

        <ReCAPTCHA
          className="mb-3"
          sitekey={process.env.REACT_APP_site_key}
          onChange={handleRecaptcha}
          style={{"transform":"scale(0.77)", "WebkitTransform":"scale(0.77)" , "transformOrigin":"0 0" ,"WebkitTransformOrigin":"0 0"}}
        />

        <Button
          type="submit"
          className="rounded-1 border-0 "
          style={{ backgroundColor: "#9b1fe9" }}
          disabled={!verified}
        >
          Send Request
        </Button>
      </Form>
    </div>
  );
};

export default WalletForm;
