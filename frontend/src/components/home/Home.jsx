import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import HomeImg from "../../images/homeImg.png";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <br />
        <Row className="justify-content-md-center align-items-center text-center">
          <h1 style={{ color: "#15317E", fontSize: "2rem", fontWeight: "800" }}>
            Crud Application
          </h1>
          <Col md="8">
            <br />
            <img src={HomeImg} className="img-fluid" alt="Users Home" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
