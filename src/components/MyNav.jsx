import {
  Container,
  Dropdown,
  Nav,
  Navbar,
  DropdownButton,
} from "react-bootstrap";
import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
import Profile from "./Profile";
import Settings from "./Settings";
import FirstGallery from "./FirstGallery";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const location = useLocation();
  const [isLinkBold, setIsLinkBold] = useState(false);

  const handleSearchOpenClick = () => {
    setOpenSearch(!openSearch);
  };

  const handleClick = (link) => {
    setIsLinkBold(!isLinkBold);
    console.log(`hai cliccato il link ${link}`);
  };

  return (
    <Navbar sticky="top" expand="md">
      <Container fluid>
        <header>
          <Navbar.Brand className="container-logo ">
            <img src={logo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="first-nav d-none d-md-flex align-items-center">
              <Link
                className={`nav-link rounded-start ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                to="/"
                onClick={() => handleClick()}
                style={{ fontWeight: isLinkBold ? "bold" : "normal" }}
              >
                Tv Shows
              </Link>
              <Nav.Link className="nav-link text-light" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="nav-link text-light" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="nav-link rounded-end text-light" href="#">
                MyList
              </Nav.Link>
            </Nav>

            <Nav className="second-nav align-items-center flex-nowrap ms-auto">
              <Nav.Item className="d-flex align-items-center">
                <Nav.Link
                  href="#"
                  onClick={handleSearchOpenClick}
                  className=" rounded-start text-light"
                >
                  {openSearch ? (
                    <div className="fw-bold p-1">Close</div>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  )}
                </Nav.Link>
                {openSearch && (
                  <div className="search-input px-3 py-1 bg-primary">
                    <input
                      type="text"
                      placeholder=" Search"
                      className="rounded-4 p-1 border bg-light"
                      value={inputSearchValue}
                      onChange={(e) => setInputSearchValue(e.target.value)}
                    />
                  </div>
                )}
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="nav-link text-light" href="#">
                  Kids
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#" className="nav-link rounded-end text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Dropdown className="nav-item dropstart ps-2">
                  <Dropdown.Toggle className="btn btn-primary dropdown-toggle bg-primary ">
                    <img src={avatar} width="25px" alt="avatar" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    variant="dark"
                    className="bg-primary border border-dark shadow-lg "
                  >
                    <Link
                      className={`nav-link rounded text-light ${
                        location.pathname === "/profile" ? "active" : ""
                      }`}
                      to="/profile"
                    >
                      Edit Profile
                    </Link>
                    <Link
                      className={`nav-link rounded text-light ${
                        location.pathname === "/settings" ? "active" : ""
                      }`}
                      to="/settings"
                    >
                      Settings
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </header>
      </Container>
    </Navbar>
  );
};
export default MyNav;
