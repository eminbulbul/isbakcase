import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Login from "../pages/Login";
import Home from "../pages/Home";
const Approuter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Approuter;
