import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import h1 from "../Assets/h1.webp";
import h2 from "../Assets/h2.webp";
import h3 from "../Assets/h3.webp";
import h4 from "../Assets/h4.webp";
import h5 from "../Assets/h5.webp";
import h6 from "../Assets/h6.webp";
import h7 from "../Assets/h7.webp";
import h8 from "../Assets/h8.webp";
import h9 from "../Assets/h9.webp";
import h10 from "../Assets/h10.webp";
import h11 from "../Assets/h11.webp";
import h12 from "../Assets/h12.webp";
import h13 from "../Assets/h13.webp";
import h14 from "../Assets/h14.webp";
import h15 from "../Assets/h15.webp";
import h16 from "../Assets/h16.webp";
import h17 from "../Assets/h17.webp";
import h18 from "../Assets/h18.webp";

export default function Horses() {
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
        <p style={{ fontSize: "1.5rem" }}>Horses Sales List</p>
        <hr />
        <center>
          <h2>Mini Horses For Sale</h2>
        </center>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h1} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Peggy Sue
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                ADOPTABLE
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              June 2023 AMHA/AMHR Bay Filly
              <br /> Sire: Alliance MidKnight Whisper <br />
              Dam: Kasuez Ima Hidden Patty
            </p>
          </Col>

          <Col md="4">
            <img src={h2} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Black Magic
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $9,000
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              May 2023 AMHA/AMHR Black Filly
              <br /> Sire: Kakos Beware of Casanova
              <br /> Dam: Kasuez Roxx Song
            </p>
          </Col>

          <Col md="4">
            <img src={h3} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Dusty
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $9,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              October 2022 AMHA/AMHR Appy Colt
              <br /> Sire: Kakos Beware of Casanova <br />
              Dam: Black Mountain Salsas Lady Isadora
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h4} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                BabyDoll
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $10,499
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2016 AMHA/AMHR Black Mare
              <br /> Sire: Bar B Midnight Cowboy (AMHA World Champion Senior
              Stallion)
              <br /> Dam: Villas Satin Doll
            </p>
          </Col>

          <Col md="4">
            <img src={h5} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Ocean
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $12,699
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              April 2023 AMHA/AMHR Appy Filly
              <br /> Sire: Kakos Beware of Casanova
              <br />
              Dam: Alliance Careless Whisper
            </p>
          </Col>

          <Col md="4">
            <img src={h6} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Foxxy
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                ADOPTABLE
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2022 AMHA/AMHR Bay Pintaloosa Filly
              <br /> Sire: Kakos Beware of Casanova <br />
              Dam: Black Mountains Roxx Song
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h7} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Thunder Prince
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                SOLD
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2022 AMHA/AMHR Silver Appy Colt
              <br /> Sire: Kakos Beware of Casanova
              <br />
              Dam: Alliance Careless Whisper
            </p>
          </Col>

          <Col md="4">
            <img src={h8} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                90 Proof
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $14,000
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2005 Bred AMHA/AMHR Buckskin Mare
              <br /> Sire: Sweetwaters Royalty by Gold Boy
              <br /> Dam: Shadowboxs Raven Beauty
            </p>
          </Col>

          <Col md="4">
            <img src={h9} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Love Song
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $15,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2014 AMHA/AMHR Black Bay Mare
              <br /> Sire: Oak Bay Salsamio (AMHA World Grand Champion,
              AMHA/AMHR Grand & Supreme Halter Stallion)
              <br /> Dam: Black Mountains Heart Song (AMHA/AMHR National Reserve
              Champion)*Love Song has both Boones Little Buckaroo and Orion
              Light Vant Huttenest in her lineage
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h10} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Spots
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $6,500
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              This beautiful double registered leopard filly is a head turner
              with exquisite confirmation and unique spotted coloring. Born
              10-8-21. <br />
              Sire: Kakos Beware of Casanova
              <br /> Dam: Black Mountain Salsas Lady Isadora
            </p>
          </Col>

          <Col md="4">
            <img src={h11} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Careless Beauty
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $7,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2020 AMHA/AMHR Beautiful and Refined Smokey Black Appy Filly
              <br /> Sire: Kakos Beware of Casanova
              <br /> Dam: Alliance Careless Whisper
            </p>
          </Col>

          <Col md="4">
            <img src={h12} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Jumping Jack Flash
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $8,599
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              "Jack" is a handsome & refined AMHA/AMHR registered miniature colt
              born on 8-14-21.
              <br /> Sire: Kakos Beware of Casanova
              <br /> Dam: Valley M Dun 90 Proof
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h13} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Gypsy
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $8,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Gypsy is a beautiful & refined AMHA/AMHR registered miniature
              mare. Sorrel in color and carries a gene to produce the sought
              after silver foals. *Gypsy has both Boones Little Buckaroo and
              Orion Light Vant Huttenest in her lineage. She is weaned, halter
              broke, gentle and ready to be yours!
              <br /> Sire: Kakos Beware of Casanova
              <br /> Dam: Black Mountain Salsas Love Song
            </p>
          </Col>

          <Col md="4">
            <img src={h14} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Saturday
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $9,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Black Snowcap Appaloosa Stallion Foaled 5/6/2017 AMHA/AMHR
              Registered
              <br /> Sire: Coffeys SS Spotless Spirit (29" Stallion)
              <br /> Dam: Dokks Painted Black Opal
            </p>
          </Col>

          <Col md="4">
            <img src={h15} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Shadow
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $10,500
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              2020 AMHA/AMHR Smokey Black Appy LP/n, PATN/PATN
              <br /> Sire: Kakos Beware of Casanova
              <br /> Dam: Poston's Tiny Dancer
            </p>
          </Col>
        </Row>

        <Row style={{ overflowX: "hidden" }}>
          <Col md="4">
            <img src={h16} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Rocky
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $13,000
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Black Leopard Appaloosa Colt Foaled 2/23/2020 AMHA/AMHR Registered
              <br />
              Sire: Kakos Beware of Casanova <br /> Dam: Black Mountain Salsas
              Lady Isadora
            </p>
          </Col>

          <Col md="4">
            <img src={h17} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Copper
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $8,999
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Bay Colt Foaled 4/20/2020 AMHA/AMHR Registered.
              <br /> Sire: Opal Woods Mr Sat Nite Special.
              <br /> Dam: Valley M Dun 90 Proof
            </p>
          </Col>

          <Col md="4">
            <img src={h18} style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p className="nomen" style={{ fontSize: "1.3rem" }}>
                Colt 45
              </p>
              <p
                className="avail"
                style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              >
                $14,599
              </p>
            </div>
            <p className="word" style={{ fontSize: "1.3rem" }}>
              Black Bay Pintaloosa Colt Foaled 5/18/2019 AMHA/AMHR Registered<br />
              Sire: Kakos Beware of Casanova.<br /> Dam: Valley M Dun 90 Proof
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
