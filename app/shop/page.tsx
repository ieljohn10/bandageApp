import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Coffee,
  ProductCover5,
} from "../../assets/images";
import Title from "../components/Title/Title";
import SubTitle from "../components/SubTitle/SubTitle";
import {
  FavoriteBorder,
  RemoveRedEye,
  ShoppingCart,
  Star,
  StarBorder,
} from "@mui/icons-material";

function Shop() {
  return (
    <Container>
      {/* Breadcrumbs */}
      <Box marginY={1}>
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography variant="body1" fontWeight={700}>
            Home
          </Typography>
          <Typography color="#BDBDBD" variant="body1" fontWeight={700}>
            Shop
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Items */}
      <Box
        display="flex"
        marginTop={4}
        marginBottom={8}
        flexDirection={{ xs: "column", md: "row" }}
        gap={8}
      >
        <Box alignSelf="center">
          <Box width={{ sm: 334, md: 506 }} height={{ sm: 334, md: 450 }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={Coffee}
              alt="coffee"
            />
          </Box>
          <Box display="flex" gap={3} marginTop={1}>
            <Image height={75} src={Coffee} alt="coffee" />
            <Image height={75} src={Coffee} alt="coffee" />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} marginY={2}>
          <Box>
            <SubTitle
              title="Floating Phone"
              fontWeight={500}
              textTransform="capitalize"
              variant="h5"
              textAlign="left"
              marginBottom={1}
            />
            <Box display="flex" alignItems="center" gap={2} marginBottom={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <Star fontSize="medium" sx={{ color: "#F3CD03" }} />
                <Star fontSize="medium" sx={{ color: "#F3CD03" }} />
                <Star fontSize="medium" sx={{ color: "#F3CD03" }} />
                <Star fontSize="medium" sx={{ color: "#F3CD03" }} />
                <StarBorder fontSize="medium" sx={{ color: "#F3CD03" }} />
              </Box>
              <Typography fontWeight={600}>10 Reviews</Typography>
            </Box>
            <Title title="$1,139.33" textAlign="left" />
            <Box marginTop={1}>
              <Box display="flex">
                <SubTitle title="Availability :" fontWeight={600} />
                <SubTitle
                  paddingLeft={1}
                  title="In Stock"
                  color="#23A6F0"
                  fontWeight={600}
                />
              </Box>
            </Box>
          </Box>
          <Box marginTop={18}>
            <Divider />
            <Box marginTop={2}>
              <Chip
                sx={{
                  backgroundColor: "#23A6F0",
                  height: 30,
                  minWidth: 30,
                  borderRadius: 15,
                  marginRight: 1,
                }}
              />
              <Chip
                sx={{
                  backgroundColor: "#2DC071",
                  height: 30,
                  minWidth: 30,
                  borderRadius: 15,
                  marginRight: 1,
                }}
              />
              <Chip
                sx={{
                  backgroundColor: "#E77C40",
                  height: 30,
                  minWidth: 30,
                  borderRadius: 15,
                  marginRight: 1,
                }}
              />
              <Chip
                sx={{
                  backgroundColor: "#252B42",
                  height: 30,
                  minWidth: 30,
                  borderRadius: 15,
                  marginRight: 1,
                }}
              />
            </Box>
            <Box marginTop={8} display="flex" alignItems="center" gap={2}>
              <Button variant="contained">Select Options</Button>
              <Button
                variant="outlined"
                sx={{
                  height: 30,
                  minWidth: 30,
                  width: 30,
                  borderRadius: 15,
                  borderColor: "#BDBDBD",
                }}
              >
                <FavoriteBorder fontSize="small" sx={{ color: "#252B42" }} />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  height: 30,
                  minWidth: 30,
                  width: 30,
                  borderRadius: 15,
                  borderColor: "#BDBDBD",
                }}
              >
                <ShoppingCart fontSize="small" sx={{ color: "#252B42" }} />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  height: 30,
                  minWidth: 30,
                  width: 30,
                  borderRadius: 15,
                  borderColor: "#BDBDBD",
                }}
              >
                <RemoveRedEye fontSize="small" sx={{ color: "#252B42" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Tabs */}
      <Box display={{ xs: "none", md: "block" }} paddingBottom={5}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginY={3}
        >
          <Tabs aria-label="disabled tabs example">
            <Tab label="Description" sx={{ fontWeight: 700 }} />
            <Tab label="Additional Information" sx={{ fontWeight: 700 }} />
            <Tab label="Reviews (0)" sx={{ fontWeight: 700 }} />
          </Tabs>
        </Box>
        <Divider />
        <Box display="flex" marginTop={5} gap={3}>
          <Box width={2 / 3}>
            <SubTitle
              title="the quick fox jumps over"
              textAlign="left"
              variant="h5"
              fontWeight={600}
              marginBottom={3}
            />
            <SubTitle
              title="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
              textAlign="left"
              marginBottom={3}
            />
            <SubTitle
              title="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
              textAlign="left"
              marginBottom={3}
              paddingLeft={3}
              sx={{
                borderLeft: 2,
                borderColor: "#23856D",
              }}
            />
            <SubTitle
              title="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
              textAlign="left"
              marginBottom={3}
            />
          </Box>
          <Box>
            <Image
              style={{ borderRadius: 10 }}
              height={413}
              src={Coffee}
              alt="coffee"
            />
          </Box>
        </Box>
      </Box>

      {/* Best Seller */}
      <Box display={{ xs: "none", md: "block" }} marginY={3} padding={5}>
        <Box marginBottom={2}>
          <Title
            title="BESTSELLER PRODUCTS"
            textAlign="left"
            marginBottom={3}
          />
          <Divider />
        </Box>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 1, sm: 12, md: 20 }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={1} sm={4} md={5} key={index}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width="183px"
                margin={{ xs: "auto" }}
              >
                <Image
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "238px",
                  }}
                  src={ProductCover5}
                  alt={"product"}
                  loading="lazy"
                />
                <Box paddingTop="25px" marginBottom="35px">
                  <Title title="Graphic Design" variant="body1" />
                  <SubTitle
                    title="English Department"
                    fontWeight={700}
                    variant="body2"
                    marginY={0.5}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                  >
                    <Typography
                      color="#BDBDBD"
                      fontSize="16px"
                      fontWeight={700}
                      variant="body1"
                    >
                      $16.48
                    </Typography>
                    <Typography
                      color="#23856D"
                      fontSize="16px"
                      fontWeight={700}
                      variant="body1"
                    >
                      $6.48
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Logos */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        alignItems="center"
        gap={{ xs: 5 }}
      >
        <Box width={{ sm: 149, md: 103 }} height={{ sm: "auto", md: 35 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand1}
            alt="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 83 }} height={{ sm: "auto", md: 59 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand2}
            alt="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 102 }} height={{ sm: "auto", md: 75 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand3}
            alt="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 103 }} height={{ sm: "auto", md: 42 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand4}
            alt="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 104 }} height={{ sm: "auto", md: 62 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand5}
            alt="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 76 }} height={{ sm: "auto", md: 72 }}>
          <Image
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            src={Brand6}
            alt="coffee"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Shop;
