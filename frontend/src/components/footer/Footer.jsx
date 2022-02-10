import React from "react";
import "./footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid className="fixed-bottom bottom-0">
        <Row className="align-items-center justify-content-center text-center">
          <footer className="footer">
            Developer&nbsp;&nbsp;
            <a href="https://www.facebook.com/officialmuzi" target="blank">
              Muzammil
            </a>
            &nbsp;&nbsp;Crud App © 2022
          </footer>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
