import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import c4 from "../Assets/c4.webp";
import c5 from "../Assets/c5.webp";
import c6 from "../Assets/c6.webp";

import lt1 from "../Assets/lt1.jpg";
import lt2 from "../Assets/lt2.jpg";
import lt3 from "../Assets/lt3.jpg";
import lt4 from "../Assets/lt4.jpg";
import le1 from "../Assets/le1.jpg";
import le2 from "../Assets/le2.jpg";
import le3 from "../Assets/le3.jpg";
import le4 from "../Assets/le4.jpg";


export default function Cattle() {
  return (
    <Styles>
      <Container>
        <Row>
          <center>
            <Col md="4">
              <img src={logo} style={{ width: "100%" }} />
              <p style={{ fontSize: "1.2rem" }}>
                WELCOME TO KASUEZ CROSSTIMBERS MINIS & 3B MINIATURE CATTLE
              </p>
            </Col>
          </center>
        </Row>

        <Row>
          <Col md="3">
            <img src={lt1} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Gucci, Women
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            selling vintage gucci women's watches
            </p>
          </Col>

          <Col md="3">
            <img src={lt2} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Longness, Gold Edition
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
                c
              >
                SOLD
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Women's category
            </p>
          </Col>

          <Col md="3">
            <img src={lt3} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Omega Deville Gold
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $499
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Vintage, women
            </p>
          </Col>
          <Col md="3">
            <img src={lt4} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Philippe Criol 2009
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            </p>
          </Col>
        </Row>

        <Row>
        <Col md="3">
            <img src={le1} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Vintage & Luxury
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $2,599
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            selling vintage gucci women's watches
            </p>
          </Col>

          <Col md="3">
            <img src={le2} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Tissot 1963
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
                c
              >
                $799
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Women's category
            </p>
          </Col>

          <Col md="3">
            <img src={le3} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Orient Star
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            </p>
          </Col>
          <Col md="3">
            <img src={le4} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                MONZA ITALIA
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  .avail {
    font-family: Gaqire;
    font-weight: 800;
  }
  .nomen {
    font-family: lobster;
  }
  .word {
    margin-bottom: 50px;
  }
`;
