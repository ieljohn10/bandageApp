import { Add, Close, Remove } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Coffee } from "../../../assets/images";

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
            width={50}
            textAlign="center"
            fontWeight={600}
          >
            Cart
          </Typography>
          <Close fontSize="medium" />
        </Box>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Box key={index}>
            <Divider />
            <Box
              display="flex"
              marginY={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap={2}>
                <Image height={50} width={50} src={Coffee} alt="coffee" />
                <Typography>Item 1</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={4}>
                <Box display="flex" alignItems="center">
                  <Button
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
                    122
                  </Typography>
                  <Button
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
                    $122
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
            width={50}
            textAlign="center"
            fontWeight={600}
          >
            Total:
          </Typography>
          <Typography
            marginX={1}
            variant="h6"
            width={50}
            textAlign="center"
            fontWeight={600}
          >
            $122
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
