import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../../router/appLinks";
import { Grid } from "@mui/material";

//-----------------------------------------------------------------------

const Header = () => {
  return (
      <Grid container spacing={2} sx={{ height: "10vh", padding:"10px" }}>
        <Grid item>
          <Link to={LINKS.home}>Home</Link>
        </Grid>
        <Grid item>
          <Link to={LINKS.e_book}>E-Book</Link>
        </Grid>
      </Grid>
  );
};

export default Header;
