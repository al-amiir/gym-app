import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Header />
      <Container sx={{height:"90vh"}}> 
        <Outlet />
      </Container>
    </div>
  );
};

export default Home;
