import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoWalletSharp } from "react-icons/io5";
import "./NavBar.css";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";
import WalletModal from "../../../components/WalletModal/WalletModal";
import Form from "react-bootstrap/Form";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar
        className="navigation-bar py-2"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <Link to="/" className=" text-decoration-none">
          <h2 className="fs-3 custom-color fw-semibold custom-font mb-0">
            Faucets
          </h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Form.Select aria-label="Default select example">
                <option value="Arbitrum Rinkeby">Arbitrum Rinkeby</option>
                <option value="Avalanche Fuji">Avalanche Fuji</option>
                <option value="BNB Chain Testnet">BNB Chain Testnet</option>
                <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
                <option value="Fantom Testnet">Fantom Testnet</option>
                <option value="Fantom Testnet">Fantom Testnet</option>
                <option value="POA Network Sokol">POA Network Sokol</option>
                <option value="Polygon Mumbai">Polygon Mumbai</option>
              </Form.Select>
            </Nav.Link>

            <Nav.Link>
              <button
                className="rounded-1 wallet-button fw-semibold"
                variant="outline-secondary"
                onClick={handleShow}
              >
                <IoWalletSharp></IoWalletSharp> Connect Wallet
              </button>{" "}
            </Nav.Link>

            {/* Modal  */}
            <WalletModal show={show} setShow={setShow}></WalletModal>

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="profile-button"
            >
              <BiUserCircle className="fs-2  text-secondary"></BiUserCircle>
            </button>
            {openMenu && (
              <ProfileDropdown
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              ></ProfileDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
