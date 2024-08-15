import React from "react";
import { Route, Routes } from "react-router-dom";
import { Users, Products } from "../pages";

function index() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default index;
