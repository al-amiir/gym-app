import React, { useEffect, useState } from "react";
import {
  fetchProductList,
  fetchProductListDetails,
} from "../../../app/features/products/thunk";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Dialog, DialogTitle, Typography } from "@mui/material";
import Details from "./Details";

//-----------------------------------------------------------------------

const initialState = {
  page: 1,
  perPage: 10,
  type: "book",
  taxons: "All",
};

//-----------------------------------------------------------------------

const List = () => {
  const [openDialog, setopenDialog] = useState(false);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function getProductList(data) {
    dispatch(fetchProductList(data));
  }
  function handleOpenDialog(id) {
    setopenDialog(true);
    dispatch(fetchProductListDetails(id));
  }

  useEffect(() => {
    getProductList(initialState);
  }, []);

  return (
    <div>
      {product?.list?.data?.map((item, index) => (
        <Card key={index} sx={{ padding: "10px" }}>
          <Typography>{item.attributes.name}</Typography>
          <Button onClick={() => handleOpenDialog(item.id)}>Details</Button>

          <Dialog onClose={() => setopenDialog(false)} open={openDialog}>
            <Details data={product.details}/>
          </Dialog>
        </Card>
      ))}
    </div>
  );
};

export default List;
