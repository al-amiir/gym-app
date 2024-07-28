import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//-----------------------------------------------------------------------

const Home = () => {
  return (
    <>
      <Header />
      <Container sx={{ height: "90vh" }}>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
