import { Add, Close, Remove } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Coffee } from "../../../assets/images";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "@/app/features/cart/cart";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: 700,
  bgcolor: "background.paper",
  borderRadius: 2,
  overflowY: "auto",
  pt: 2,
  px: 4,
  pb: 3,
};

function CartModal({ open, handleClose }: any) {
  const cartData = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const [groupItemInCart, setGroupItemInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ** add item to cart
  const addItemToCart = (data: any) => {
    dispatch(addToCart(data));
  };

  // ** remove item to cart
  const removeItemToCart = (data: any) => {
    dispatch(removeFromCart({ id: data.id }));
  };

  useEffect(() => {
    // ** grouping of same id items
    const groupItem = cartData.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    const totalList = Object.entries(groupItem).map(
      ([key, item]: any) => item.length * item[0].price
    );

    if (totalList.length > 0) {
      const total = totalList.reduce((prev, current) => (prev += current));

      setTotalPrice(total);
    }
    setGroupItemInCart(groupItem);
  }, [cartData, dispatch]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
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
            Cart
          </Typography>
          <Close fontSize="medium" />
        </Box>
        {Object.entries(groupItemInCart).map(([key, item]: any) => (
          <Box key={key}>
            <Divider />
            <Box
              display="flex"
              marginY={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap={2}>
                <Image
                  height={50}
                  width={50}
                  src={item[0].thumbnail}
                  alt="coffee"
                />
                <Typography>{item[0].title}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={4}>
                <Box display="flex" alignItems="center">
                  <Button
                    onClick={() => removeItemToCart(item[0])}
                    variant="text"
                    size="small"
                    sx={{ width: 30, minWidth: 30 }}
                  >
                    <Remove fontSize="small" />
                  </Button>
                  <Typography
                    marginX={1}
                    variant="h6"
                    width={50}
                    textAlign="center"
                  >
                    {item.length}
                  </Typography>
                  <Button
                    onClick={() => addItemToCart(item[0])}
                    variant="text"
                    size="small"
                    sx={{ width: 30, minWidth: 30 }}
                  >
                    <Add fontSize="small" />
                  </Button>
                </Box>
                <Box>
                  <Typography
                    marginX={1}
                    variant="h6"
                    width={50}
                    textAlign="center"
                    fontWeight={600}
                  >
                    ${item[0].price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginTop={2}
        >
          <Typography
            marginX={1}
            variant="h6"
            textAlign="center"
            fontWeight={600}
          >
            Total :
          </Typography>
          <Typography
            marginX={1}
            variant="h6"
            width={50}
            textAlign="center"
            fontWeight={600}
          >
            ${totalPrice}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center">
          <Button sx={{ marginTop: 3, marginX: "auto" }} variant="contained">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default CartModal;
