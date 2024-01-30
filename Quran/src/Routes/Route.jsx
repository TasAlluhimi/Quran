import React from "react";
import { Routes, Route as R } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Errors/Error";
import Surah from "../Pages/Surah";
import Athkar from "../Pages/Athkar";

function Route() {
  return (
  <>
    <Routes>
        <R path="/" element={<Home />}></R>
        <R path="/*" element={<Error />}></R>
        <R path="/Surah/:id" element={<Surah />}></R>
        <R path="/Athkar" element={<Athkar />}></R>
    </Routes>
  </>);
}

export default Route;
