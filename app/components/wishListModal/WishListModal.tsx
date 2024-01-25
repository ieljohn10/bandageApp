import {
  removeFromWishList,
  selectWishListItems,
} from "@/app/features/wishlist/wishlist";
import { Close } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: 700,
  minHeight: 200,
  bgcolor: "background.paper",
  borderRadius: 2,
  overflowY: "auto",
  pt: 2,
  px: 4,
  pb: 3,
};

const WishListModal = ({ open, handleClose }: any) => {
  const wishListData = useSelector(selectWishListItems);
  const dispatch = useDispatch();

  const removeWishList = (data: any) => {
    dispatch(removeFromWishList(data));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }} width={{ xs: 300, md: 700 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          onClick={handleClose}
          marginBottom={1}
        >
          <Typography
            marginX={1}
            variant="h5"
            textAlign="center"
            fontWeight={600}
          >
            Wish List
          </Typography>
          <Close fontSize="medium" />
        </Box>
        {wishListData.length === 0 ? (
          <Typography variant="h5" textAlign="center" marginTop={5}>
            Empty
          </Typography>
        ) : (
          wishListData.map((item: any, index: any) => (
            <Box key={index}>
              <Divider />
              <Box
                display="flex"
                marginY={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={{ xs: "column", md: "row" }}
                  gap={4}
                  flexGrow={1}
                >
                  <Image
                    height={70}
                    width={70}
                    src={item.thumbnail}
                    alt="coffee"
                  />
                  <Box>
                    <Typography variant="h6">
                      {item.title} - ${item.price}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </Box>
                  <Button
                    onClick={() => removeWishList(item)}
                    variant="contained"
                    color="error"
                    sx={{
                      width: 20,
                      minWidth: 20,
                      height: 30,
                      borderRadius: 20,
                    }}
                  >
                    <Close fontSize="medium" />
                  </Button>
                </Box>
              </Box>
              <Divider />
            </Box>
          ))
        )}
      </Box>
    </Modal>
  );
};

export default WishListModal;
