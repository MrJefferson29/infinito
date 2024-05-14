import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import s1 from "../Assets/s1.webp";
import s2 from "../Assets/s2.webp";
import s3 from "../Assets/s3.webp";
import s4 from "../Assets/s4.webp";
import s5 from "../Assets/s5.webp";
import s6 from "../Assets/s6.webp";
import s7 from "../Assets/s7.webp";
import s8 from "../Assets/s8.webp";
import s9 from "../Assets/s9.webp";
import h10 from "../Assets/h10.webp";
import h11 from "../Assets/h11.webp";
import h12 from "../Assets/h12.webp";
import h13 from "../Assets/h13.webp";
import h14 from "../Assets/h14.webp";
import h15 from "../Assets/h15.webp";
import h16 from "../Assets/h16.webp";
import h17 from "../Assets/h17.webp";
import h18 from "../Assets/h18.webp";

export default function Sheep() {
  return (
    <Styles>
      <Container style={{ overflowX: "hidden" }}>
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
        <p style={{ fontSize: "1.5rem" }}>Lambs Sales List</p>
        <hr />
        <center>
          <h2>Sheep and Lambs For Sale</h2>
        </center>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={s1} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Shaun
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $6,500
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered white miniature babydoll ram lamb born 2-25-23
            </p>
          </Col>

          <Col md="4">
            <img src={s2} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Siena
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                SOLD
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered black miniature babydoll ewe lamb born 4-15-23
            </p>
          </Col>

          <Col md="4">
            <img src={s3} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Q Tip
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $7,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered white miniature babydoll ram lamb born 2-25-23
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={s4} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Vic
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $8,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered white miniature babydoll ram lamb born 2-14-22 out of Maybelle and Curtis Loew.
            </p>
          </Col>

          <Col md="4">
            <img src={s5} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Unspeakable
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $7,599
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            Black babydoll ram lamb born 1-27-22 out of Bonnie will be registered with NABSSAR 
            </p>
          </Col>

          <Col md="4">
            <img src={s6} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Val
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $8,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered white miniature babydoll ewe lamb born 2-14-22 out of Maybelle and Curtis Loew.
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={s7} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Marvin
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                NEGOTIABLE
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            NABSSAR registered black miniature babydoll ram lamb born 2-6-22 out of Black Velvet and Curtis Loew.
            </p>
          </Col>

          <Col md="4">
            <img src={s8} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Maple
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                SOLD
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            Maple is a NABSSAR registered white ewe born 2-22-21 and will be available at weaning
            </p>
          </Col>

          <Col md="4">
            <img src={s9} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Blck Betty
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $9,899
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
            Black Betty is a NABSSAR registered black ewe born 2020 and will be available at weaning
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  overflow-x: hidden;
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
