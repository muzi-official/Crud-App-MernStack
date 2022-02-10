import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// import material ui //
import {
  CircularProgress,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  Input,
} from "@material-ui/core";

//sweet alert //
import swal from "sweetalert";

//react bootstrap //
import { Container, Row, Col } from "react-bootstrap";

//styles sheet //
import useStyles from "./Style";

import { Link, useNavigate } from "react-router-dom";
import { getUsers, deleteUser, deleteAllUser } from "../../api";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  // Search Functionality Start //
  const [searchTerm, setsearchTerm] = useState("");
  // Search Functionality End//

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };

  const deleteUserData = async (id) => {
    swal({
      text: "User Delete Successfully!",
      icon: "success",
    });
    await deleteUser(id);
    getAllUsers();
  };

  const deleteAllUserData = async () => {
    swal({
      text: "All User Delete Successfully!",
      icon: "success",
    });
    await deleteAllUser();
    navigate("/add");
  };

  return (
    <>
      <Header />
      <br />

      {/* // search functionality start jsx // */}
      <Container>
        <Row>
          <Col md={{ offset: 9 }}>
            {!users.length ? null : (
              <Input
                style={{
                  borderRadius: "5px",
                  width: "100%",
                  padding: "6px 10px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  background: "#fff",
                }}
                type="search"
                placeholder="Search User"
                onChange={(e) => {
                  setsearchTerm(e.target.value);
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
      {/* // search functionality end jsx // */}

      <br />
      <h1
        className="text-center"
        style={{ color: "#15317E", fontSize: "2rem", fontWeight: "800" }}
      >
        All User
      </h1>
      <br />

      {!users.length ? (
        <>
          <div className="text-center">
            <CircularProgress
              size="5rem"
              thickness={5}
              style={{ color: "#D3D3D3" }}
            />
          </div>
        </>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <Container>
            <Row>
              <Col>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow className={classes.thead}>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Nic No</TableCell>
                      <TableCell>Work</TableCell>
                      <TableCell>Qualification</TableCell>
                      <TableCell>
                        {!users.length ? null : (
                          <Button
                            title="Delete All User"
                            color="secondary"
                            variant="contained"
                            onClick={() => deleteAllUserData()}
                          >
                            All&nbsp;&nbsp;<i className="fas fa-user-times"></i>
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {users
                      .filter((value) => {
                        if (searchTerm === "") {
                          return value;
                        } else if (
                          value.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          value.email
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          value.work
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          value.qualification
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((user) => (
                        <TableRow className={classes.row} key={user._id}>
                          <TableCell>{user._id}</TableCell>
                          {/* change it to user.id to use JSON Server */}
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>{user.nicno}</TableCell>
                          <TableCell>{user.work}</TableCell>
                          <TableCell>{user.qualification}</TableCell>

                          <TableCell>
                            <Button
                              title="Edit User"
                              color="primary"
                              variant="contained"
                              style={{ marginRight: 10 }}
                              component={Link}
                              to={`/edit/${user._id}`}
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            {/* change it to user.id to use JSON Server */}
                            <Button
                              title="Delete User"
                              color="secondary"
                              variant="contained"
                              onClick={() => deleteUserData(user._id)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </Button>
                            {/* change it to user.id to use JSON Server */}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Alluser;
