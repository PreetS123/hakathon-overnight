import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Login } from "../Components/Signup/Login";
import { Signup } from "../Components/Signup/Signup";
import { Landing } from "../Pages/Landing";

export const MainRoutes = () => {
  return (
    <>
   
      <Routes>
        
        <Route path="/home" element={<Landing/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/" />
      </Routes>
      <Footer/>
    </>
  );
};
