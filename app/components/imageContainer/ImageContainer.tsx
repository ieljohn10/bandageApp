import React from "react";
import Image from "next/image";

function ImageContainer({
  thumbnail,
  title,
  height = "0",
  width = "0",
  ...props
}: any) {
  return (
    <Image
      {...props}
      style={{
        width: "100%",
        height: "100%",
      }}
      height={height}
      width={width}
      src={thumbnail}
      alt={title}
    />
  );
}

export default ImageContainer;
