"use client";
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
import React, { useEffect, useState } from "react";
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Coffee,
  CoffeeTable,
} from "../../assets/images";
import Title from "../components/title/Title";
import SubTitle from "../components/subTitle/SubTitle";
import {
  FavoriteBorder,
  RemoveRedEye,
  ShoppingCart,
  Star,
  StarBorder,
} from "@mui/icons-material";
import products from "../api/products";
import ProductItem from "../components/productItem/ProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ImageContainer from "../components/imageContainer/ImageContainer";
import Image from "next/image";

function Shop() {
  const { getProducts } = products();
  const basketItem = useSelector((state: RootState) => state.basket.value);

  const [productData, setProductData] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const fetchProductData = async (limit: number, skip: number) => {
    setLoadingProducts(true);
    try {
      const data = await getProducts(limit, skip);
      setProductData(data);
      setLoadingProducts(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log(basketItem);

  useEffect(() => {
    fetchProductData(8, 0);
  }, []);

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
            <ImageContainer
              thumbnail={basketItem?.thumbnail}
              title={basketItem?.title}
            />
          </Box>
          <Box display="flex" gap={3} marginTop={1}>
            {basketItem.images.map((item, index) => (
              <Image key={item} height={75} width={100} src={item} alt={item} />
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} marginY={2}>
          <Box>
            <SubTitle
              title={basketItem.title}
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
            <Title title={`$${basketItem.price}`} textAlign="left" />
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
          <Tabs
            value="description"
            onChange={() => {}}
            aria-label="disabled tabs example"
          >
            <Tab
              value="description"
              label="Description"
              sx={{ fontWeight: 700 }}
            />
            <Tab
              value="additional"
              label="Additional Information"
              sx={{ fontWeight: 700 }}
            />
            <Tab value="review" label="Reviews (0)" sx={{ fontWeight: 700 }} />
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
            <ImageContainer
              style={{ borderRadius: 10 }}
              thumbnail={CoffeeTable}
              title="coffeetable"
              height={"413"}
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
          {!loadingProducts &&
            productData.map((data: any, index) => (
              <Grid key={`productItem${data.id}`} item xs={1} sm={4} md={5}>
                <ProductItem data={data} />
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
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand1}
            title="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 83 }} height={{ sm: "auto", md: 59 }}>
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand2}
            title="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 102 }} height={{ sm: "auto", md: 75 }}>
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand3}
            title="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 103 }} height={{ sm: "auto", md: 42 }}>
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand4}
            title="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 104 }} height={{ sm: "auto", md: 62 }}>
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand5}
            title="coffee"
          />
        </Box>
        <Box width={{ sm: 149, md: 76 }} height={{ sm: "auto", md: 72 }}>
          <ImageContainer
            objectFit="contain"
            style={{ height: "100%", width: "100%" }}
            thumbnail={Brand6}
            title="coffee"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Shop;
