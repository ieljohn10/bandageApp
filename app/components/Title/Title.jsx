import React from "react";
import { Typography } from "@mui/material";

const Title = (props) => {
  const {
    title,
    fontWeight = 700,
    variant = "h5",
    color = "#252B42",
    textAlign = "center",
  } = props;

  return (
    <Typography
      {...props}
      fontFamily="Montserrat"
      textAlign={textAlign}
      textTransform="uppercase"
      color={color}
      fontWeight={fontWeight}
      variant={variant}
    >
      {title}
    </Typography>
  );
};

export default Title;
