import { Card, Typography } from "@mui/material";
import React from "react";

//-----------------------------------------------------------------------

const Details = ({ data }) => {
  return (
    <Card  sx={{ padding: "10px" }}>
      <Typography>Details</Typography>
      <Typography>{data?.data?.attributes?.name}</Typography>
      <Typography>{data?.data?.attributes?.book?.description}</Typography>
    </Card>
  );
};

export default Details;
