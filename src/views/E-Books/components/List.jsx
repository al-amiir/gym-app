import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductList,
  fetchProductListDetails,
} from "../../../app/features/products/thunk";
import { Button, Card, Typography } from "@mui/material";

const initialState = {
  page: 1,
  perPage: 10,
  type: "book",
  taxons: "All",
};

const List = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  function getProductList(data) {
    dispatch(fetchProductList(data));
  }

  useEffect(() => {
    getProductList(initialState);
  }, []);

  return (
    <div>
      {product?.list?.data?.map((item, index) => (
        <Card key={index} sx={{padding:"10px"}}>
          <Typography>{item.attributes.name}</Typography>
          <Button onClick={() => dispatch(fetchProductListDetails(item.id))}>
            Details
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default List;
