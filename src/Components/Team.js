import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import "./Team.css";
import Col from "react-bootstrap/Col";
import i1 from '../Assets/store.jpg';
import i2 from '../Assets/inventory.webp';
import i3 from '../Assets/vet.jpg';
import i4 from '../Assets/trainer.webp';
import i5 from '../Assets/groomer.jpg';
import i6 from '../Assets/deliv.jpg';
import i7 from '../Assets/main.jpg'
import i8 from '../Assets/security.avif';
import i9 from '../Assets/IT.jpg'

export default function Team() {
  return (
    <Styles>
      <Container>
        <Row>
          <center>
          <Col md='5' style={{fontSize: '1.4rem', fontFamily: 'Gaqire'}}>
          To speak to any of these staff personel(ex; the Vet) regarding any
          problems you are facing, please contact our customer care on the
          Messages icon on the screen, and request to speak with that
          department, or individual staff. You will be responded to as quick as
          possible.
          </Col>
          </center>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
.cradle {
  width: 50%;
  height: 115px;
  border-radius: 100%;
  margin-bottom: 20px;
}
`;
