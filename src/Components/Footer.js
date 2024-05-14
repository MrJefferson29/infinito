import React from "react";
import styled from "styled-components";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Styles>
      <Container style={{ padding: "65px" }}>
        <Row>
          <Col md="3">
            <div className="IconWrapper">
              <FontAwesomeIcon icon={faStopwatch} />
            </div>
          </Col>
          <center>
            <Col md="9">
              <font
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "600",
                  matginBottom: "25px",
                }}
              >
                INFINITO VINTAGE AND LUXURY WATCHES
              </font>
            </Col>
          </center>
        </Row>
        <Row>
          <Col md="4">
            <center>
              <div style={{ color: "burlywood" }}>
                <p
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: "200",
                    color: "white",
                  }}
                >
                  Location
                </p>
                <p style={{ fontSize: "1.2rem" }}>94124 Diana St,</p>
                <p style={{ fontSize: "1.2rem" }}>San Francisco</p>
              </div>
            </center>
          </Col>
          <Col md="4">
            <center>
              <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Contact</p>
              <p style={{ fontSize: "1.2rem", color: "burlywood" }}>
                📞 (872) 310-8817
              </p>
              <NavLink
                to="mailto:bcattle91@gmail.com"
                className="lin"
                style={{ fontSize: "1.2rem", color: "burlywood" }}
              >
                ✉️ Gmail
              </NavLink>
            </center>
          </Col>
          <Col md="4">
            <p style={{ fontSize: "2.3rem", fontWeight: "200" }}>Join Us</p>
            <NavLink
              to="#"
              className="lin"
              style={{
                fontSize: "1.2rem",
                color: "burlywood",
                borderBottom: "2px solid burlywood",
                padding: "2px",
                width: "auto",
                margin: "10px",
              }}
            >
              Facebook
            </NavLink>
            <NavLink
              to="#"
              className="lin"
              style={{
                fontSize: "1.2rem",
                color: "burlywood",
                borderBottom: "2px solid burlywood",
                padding: "2px",
                width: "auto",
                margin: "10px",
              }}
            >
              Customer Support
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  background: black;
  color: white;
  .IconWrapper {
    width: auto;
    font-size: 56px;
    color: burlywood;
    padding-right: 20px;
    transition: transform 0.2s ease;
  }
  .footer {
    width: 100%;
    border-bottom: rgba(0, 0, 0, 0.2) solid 1px;
    margin: 0 auto;
    align-items: center;
}

.copyright {
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
}

.copyright .copyright-blog {
    font-size: 18px;
    color: rgb(0, 0, 0);
    text-align: center;
    margin: 0px;
}
`;
