import React, { useState } from "react";
import Header from "../header/Header";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "./adduser.css";
import Footer from "../footer/Footer";
import { addUser } from "../../api/index.js";
import { useNavigate } from "react-router-dom";

//sweet alert //
import swal from "sweetalert";

const Adduser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    nicno: "",
    work: "",
    qualification: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const addUserDetails = async () => {
    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.nicno ||
      !user.work ||
      !user.qualification
    ) {
      swal({
        text: "Please fill in the required information!",
        icon: "error",
      });
      return;
    }

    swal({
      text: "User Add Successfully!",
      icon: "success",
    });
    await addUser(user);

    navigate("/all");
  };

  return (
    <>
      <Header />
      <br />
      <Container>
        <Row className="align-items-center text-center justify-content-center">
          <Col className="rounded my-5 main" md={6}>
            <br />
            <h2
              style={{
                color: "#15317E",
                fontSize: "1.7rem",
                fontWeight: "900",
              }}
            >
              Add User
            </h2>

            <form method="POST" className="register-form" id="register-form">
              <br />
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                  required={true}
                  type="text"
                  id="name"
                  name="name"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                  required={true}
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                <Input
                  required={true}
                  type="number"
                  id="phone"
                  name="phone"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Nic Number</InputLabel>
                <Input
                  required={true}
                  type="number"
                  id="nicno"
                  name="nicno"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.nicno}
                  onChange={handleInputs}
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Work</InputLabel>
                <Input
                  required={true}
                  type="text"
                  id="work"
                  name="work"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.work}
                  onChange={handleInputs}
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl className="form_control">
                <InputLabel htmlFor="my-input">Qualification</InputLabel>
                <Input
                  required={true}
                  type="text"
                  id="qualification"
                  name="qualification"
                  aria-describedby="my-helper-text"
                  autoComplete="off"
                  value={user.qualification}
                  onChange={handleInputs}
                />
              </FormControl>
              <br />
              <br />
              <Button
                color="primary"
                variant="contained"
                onClick={() => addUserDetails()}
              >
                Add User&nbsp;<i className="fas fa-user-plus"></i>
              </Button>
              <br />
              <br />
              <br />
            </form>
          </Col>
        </Row>
      </Container>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Adduser;
