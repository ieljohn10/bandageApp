import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function GridItem(props: any) {
  return (
    <Box position="relative" {...props} height={props.height}>
      <Image
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        src={props.image}
        alt={props.name}
        loading="lazy"
      />
      <Box position="absolute" top={24} left={24}>
        <Typography color={"#2DC071"} fontSize="14px" fontWeight="700">
          5 Items
        </Typography>
        <Typography
          color={"#252B42"}
          fontSize="40px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Furniture
        </Typography>
        <Typography color={"#252B42"} fontSize="14px" fontWeight="700">
          Read more
        </Typography>
      </Box>
    </Box>
  );
}

export default GridItem;
