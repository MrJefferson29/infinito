import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import i1 from "../Assets/i1.webp";
import y1 from "../Assets/y1.jpg";
import i2 from "../Assets/i2.webp";
import i3 from "../Assets/i3.webp";
import i4 from "../Assets/i4.webp";
import i5 from "../Assets/i5.webp";
import log from "../Assets/log.webp";
import k1 from "../Assets/k1.png";
import k2 from "../Assets/k2.png";
import k3 from "../Assets/k3.png";
import k4 from "../Assets/k4.png";
import k5 from "../Assets/k5.png";
import k6 from "../Assets/k6.png";
import w1 from "../Assets/w1.jpg";
import w2 from "../Assets/w2.jpg";
import w3 from "../Assets/w3.jpg";
import w4 from "../Assets/w4.jpg";

export default function About() {
  return (
    <Styles>

      <Container style={{ overflowX: "hidden" }}>
        <Row>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              padding: "15px",
              fontFamily: "betterfly",
            }}
          >
            Vacheron Constantin, one of the oldest watch brands in the world
          </p>
          <hr style={{ fontWeight: "900", border: "1px solid black" }} />
         
        </Row>
        <Row style={{ background: "aliceblue", marginTop: "60px" }}>
          <Col md="5">
            <p style={{ fontSize: "1.8rem", fontWeight: "600" }}>About Us</p>
            <hr style={{ fontWeight: "900", border: "1px solid black" }} />
            <p style={{ fontSize: "1.9rem", fontWeight: "700" }}>
              How it All Started
            </p>
            <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
              Infinitowatch was founded in 2015, we sell second hand original
              vintage & modern watches in the best condition in their class.
            </p>
            <Link to="/about">
              <p style={{ fontWeight: "800", color: "black" }}>
                Click Here to Read More
              </p>
            </Link>
            <br />
            <p style={{ fontSize: "1.7rem" }}>Coming soon...</p>
            <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
              Located in Bali, we provide delivery throughout Indonesia with
              free postage and international delivery. Our love for watches &
              their historical value makes us committed to always providing
              second hand watches in the best condition with various choices
              from well-known brands to our customers.
            </p>

            <Link to="" style={{ textDecoration: "none" }}>
              <p
                style={{
                  fontSize: "1.4em",
                  fontWeight: "400",
                  color: "black",
                  padding: "5px",
                }}
              >
                <u>CONTACT US 〉</u>
              </p>
            </Link>
            <p style={{ fontSize: "1.6rem" }}>
              Happy shopping and enjoy the collection in our gallery,
              infinitowatch the art of being timeless.
            </p>
            <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
              Questions, Comments, You Tell us, We Listen
            </p>
          </Col>
          <Col md="7">
            <img src={w1} style={{ width: "80%", float: 'right' }} />
          </Col>
        </Row>
        <Row style={{ height: "300px" }}></Row>

        <Row style={{ background: "aliceblue" }}>
          <Col md="5">
            <img src={logo} style={{ width: "100%" }} />
          </Col>
          <Col style={{ position: "relative" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p style={{ fontSize: "1.6rem" }}>Infinto Luxury Watches</p>
            <p
              style={{ fontWeight: "800", color: "black", fontSize: "1.7rem" }}
            >
              Vintage
            </p>
            <p style={{ fontSize: "1.3rem" }}>Infinto Luxury Watches</p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: hidden;
  @media only screen and (max-width: 913px) {
    .ill {
      display: none;
    }
  }
`;
