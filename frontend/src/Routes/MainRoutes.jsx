import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Landing } from "../Pages/Landing";

export const MainRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
      <Footer/>
    </>
  );
};
