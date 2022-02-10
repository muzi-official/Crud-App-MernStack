import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Adduser from "./components/adduser/Adduser";
import Alluser from "./components/alluser/Alluser";
import Error from "./components/error/Error";
import Edituser from "./components/edituser/Edituser";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all" element={<Alluser />} />
        <Route exact path="/add" element={<Adduser />} />
        <Route exact path="/edit/:id" element={<Edituser />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
