import { Typography } from "@mui/material";
import React from "react";

const SubTitle = (props: any) => {
  const {
    title,
    fontWeight = 400,
    variant = "subtitle2",
    color = "#737373",
    textAlign = "center",
  } = props;

  return (
    <Typography
      {...props}
      fontFamily="Montserrat"
      textAlign={textAlign}
      textTransform="capitalize"
      color={color}
      fontWeight={fontWeight}
      variant={variant}
    >
      {title}
    </Typography>
  );
};

export default SubTitle;
