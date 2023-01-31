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
import { Dropdown, DropdownButton} from 'react-bootstrap';



const NavBar = () => {

  const ic1 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon1.PNG')}></img>
  const ic2 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon2.PNG')}></img>
  const ic3 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon3.PNG')}></img>
  const ic4 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon4.PNG')}></img>
  const ic5 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon5.PNG')}></img>
  const ic6 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon6.PNG')}></img>
  const ic7 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon7.PNG')}></img>
  const ic8 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon8.PNG')}></img>
  const ic9 = <img style={{width: "15px"}} src={require('../../../assets/icons/icon9.PNG')}></img>

  const options = [
    {icon: ic1, name: "Ethereum Kovan"},
    {icon: ic2, name: "Arbitrum Rinkeby"},
    {icon: ic3, name: "Avalanche Fuji"},
    {icon: ic4, name: "BNB Chain Testnet"},
    {icon: ic5, name: "Ethereum Rinkeby"},
    {icon: ic6, name: "Fantom Testnet"},
    {icon: ic7, name: "Harmony Testnet"},
    {icon: ic8, name: "POA Network Sokol"},
    {icon: ic9, name: "Polygon Mumbai"},
  ]

  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);
  const { setTestnet, testnet } = useContext(AuthContext);

  const handleSelect = (eventKey) => {
    setTestnet(eventKey);
  }; 

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
              
              <DropdownButton
                id="dropdown-basic-button"
                title={testnet}
                onSelect={handleSelect}
              >
                {
                  options.map((option, id)=><Dropdown.Item key={id} eventKey={option.name}>
                  {option.icon} {option.name}
               </Dropdown.Item>)
                }
                
              </DropdownButton>
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
