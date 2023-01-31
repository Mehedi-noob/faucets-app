import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoWalletSharp } from "react-icons/io5";
import "./NavBar.css";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";
import WalletModal from "../../../components/WalletModal/WalletModal";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const icon1 = require('../../../assets/icons/icon1.PNG')
const icon2 = require('../../../assets/icons/icon2.PNG')
const icon3 = require('../../../assets/icons/icon3.PNG')
const icon4 = require('../../../assets/icons/icon4.PNG')
const icon5 = require('../../../assets/icons/icon5.PNG')
const icon6 = require('../../../assets/icons/icon6.PNG')
const icon7 = require('../../../assets/icons/icon7.PNG')
const icon8 = require('../../../assets/icons/icon8.PNG')
const icon9 = require('../../../assets/icons/icon9.PNG')

const NavBar = () => {

  const ic = <img src={icon1}></img>

  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const {setTestnet} = useContext(AuthContext);

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
        <Link to="/admin" className=" text-decoration-none">
          <h2 className="ms-5 fs-3 fw-semibold custom-font mb-0">
            Admin Panel
          </h2>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link>
              {/* <Form.Select onChange={(e)=>setTestnet(e.target.value)} aria-label="Default select example" id="testnet-link">
                <option value="Arbitrum Rinkeby"><div> { <img src={icon1} alt="" /> }</div></option>
                <option value="Avalanche Fuji">Avalanche Fuji</option>
                <option value="BNB Chain Testnet">BNB Chain Testnet</option>
                <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
                <option value="Fantom Testnet">Fantom Testnet</option>
                <option value="Fantom Testnet">Fantom Testnet</option>
                <option value="POA Network Sokol">POA Network Sokol</option>
                <option value="Polygon Mumbai">Polygon Mumbai</option>
              </Form.Select> */}
              <div className="border-1">Avalanche Fuji</div>
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
