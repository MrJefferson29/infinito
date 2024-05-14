import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <Styles>
      <Row style={{ background: "#ffcf6b" }}>
        <center>
          <p style={{ fontSize: "1.2rem", pading: "20px", fontWeight: "800" }}>
            Check out our list of Available Vintage & Luxury Watches! ♡
          </p>
        </center>
      </Row>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navy"
        sticky="top"
        bg="light"
      >
        <Container sticky="top">
          <Navbar.Brand href="/">
            <img src={logo} style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: "relative", background: "aliceblue" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            sticky="top"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Link className="link" to="/" style={{ color: "#000" }}>
                HOME
              </Link>
              <Link
                className="link"
                to="/store"
                style={{ color: "#000" }}
              >
                STORE
              </Link>
              <Link
                className="link"
                to="/about"
                style={{ color: "#000" }}
              >
                ABOUT
              </Link>
              <Link
                className="link"
                to="/meet-the-team"
                style={{ color: "#000" }}
              >
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;

const Styles = styled.div`
  // height: 200px;
  .IconWrapper {
    font-size: 56px;
    color: burlywood;
    padding-right: 20px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  .link {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: aliceblue;
    margin-left: 45px;
  }
  .eor {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
