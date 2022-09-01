import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const MainRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
      <Footer/>
    </>
  );
};
