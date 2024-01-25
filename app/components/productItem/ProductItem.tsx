import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";

interface ProductItemDataTypes {
  data: {
    title: string;
    thumbnail: string;
    description: string;
    price: number;
    discountPercentage: number;
  };
}

function ProductItem({ data }: ProductItemDataTypes) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="183px"
      margin={{ xs: "auto" }}
    >
      <Image
        style={{
          objectFit: "contain",
          width: "100%",
          height: "238px",
        }}
        height={100}
        width={100}
        src={data?.thumbnail}
        alt={data?.title}
        loading="lazy"
      />
      <Box paddingTop="25px" marginBottom="35px">
        <Title title={data?.title} variant="body1" />
        <SubTitle
          title={data?.description}
          fontWeight={700}
          variant="body2"
          marginY={0.5}
        />
        <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
          <Typography
            color="#BDBDBD"
            fontSize="16px"
            fontWeight={700}
            variant="body1"
          >
            ${data?.price}
          </Typography>
          <Typography
            color="#23856D"
            fontSize="16px"
            fontWeight={700}
            variant="body1"
          >
            ${data?.price - data?.price * (data?.discountPercentage / 100)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductItem;
