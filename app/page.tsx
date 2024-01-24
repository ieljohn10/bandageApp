import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import GridItem from "./components/GridItem/GridItem";
import {
  CardCover5,
  CardCover6,
  CardCover7,
  CardCover8,
  ProductCover5,
  CarbonBook,
  Book,
  Arrow,
  Bedroom,
  Kitchen,
  Flowers,
} from "../assets/images";
import Image from "next/image";

const Title = (props: any) => {
  const {
    title,
    weight = 700,
    fontSize = 24,
    lineHeight = 32,
    color = "#252B42",
    textAlign = "center",
  } = props;
  return (
    <Typography
      {...props}
      fontFamily="Montserrat"
      textAlign={textAlign}
      textTransform="uppercase"
      lineHeight={`${lineHeight}px`}
      color={color}
      fontWeight={weight}
      fontSize={`${fontSize}px`}
    >
      {title}
    </Typography>
  );
};

const SubTitle = (props: any) => {
  const {
    title,
    weight = 400,
    fontSize = 20,
    lineHeight = 30,
    color = "#737373",
    textAlign = "center",
  } = props;
  return (
    <Typography
      {...props}
      fontFamily="Montserrat"
      textAlign={textAlign}
      textTransform="capitalize"
      lineHeight={`${lineHeight}px`}
      color={color}
      fontWeight={weight}
      fontSize={fontSize}
    >
      {title}
    </Typography>
  );
};

export default function Home() {
  return (
    <Container>
      {/* Grid Items */}
      <Box
        paddingY="80px"
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: "repeat(2, 308px)",
          gap: "7px",
        }}
      >
        <GridItem
          sx={{ gridColumn: "1 / 5", gridRow: "1 / 3" }}
          height={623}
          image={CardCover5}
          name={"cardcover5"}
        />
        <GridItem
          sx={{ gridColumn: "5/11", gridRow: "1 / 2" }}
          height={308}
          image={CardCover6}
          name={"cardcover5"}
        />
        <GridItem
          sx={{ gridColumn: "5/8", gridRow: "2 / 3" }}
          height={308}
          image={CardCover8}
          name={"cardcover5"}
        />
        <GridItem
          sx={{ gridColumn: "8/11", gridRow: "2 / 3" }}
          height={308}
          image={CardCover7}
          name={"cardcover5"}
        />
      </Box>

      {/* Best Seller Products */}
      <Box paddingY="80px">
        <Box>
          <SubTitle title="Featured Products" />
          <Title title="BESTSELLER PRODUCTS" marginY="10px" />
          <SubTitle
            title="Problems trying to resolve the conflict between Products"
            fontSize={14}
            lineHeight={20}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="24px"
          marginY="24px"
          paddingY="24px"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 12, md: 20 }}
          >
            {Array.from(Array(20)).map((_, index) => (
              <Grid item xs={1} sm={4} md={4} key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  width="183px"
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
                    <Title
                      title="Graphic Design"
                      fontSize={16}
                      lineHeight={24}
                    />
                    <SubTitle
                      title="English Department"
                      fontSize={14}
                      lineHeight={24}
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
                        lineHeight="24px"
                      >
                        $16.48
                      </Typography>
                      <Typography
                        color="#23856D"
                        fontSize="16px"
                        fontWeight={700}
                        lineHeight="24px"
                      >
                        $6.48
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="outlined"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              paddingX: "40px",
              paddingY: "15px",
            }}
          >
            LOAD MORE PRODUCTS
          </Button>
        </Box>
      </Box>

      {/* Featured Products */}
      <Box paddingY="80px">
        <Box marginBottom="80px">
          <SubTitle title="Featured Products" />
          <Title title="THE BEST SERVICES" marginY="10px" />
          <SubTitle
            title="Problems trying to resolve the conflict between"
            fontSize={14}
            lineHeight={20}
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            width="315px"
            paddingX="40px"
            paddingY="35px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          >
            <Image
              style={{
                objectFit: "cover",
                width: "72px",
                height: "72px",
              }}
              src={Book}
              alt={"book"}
              loading="lazy"
            />
            <Title title="Easy Wins" />
            <SubTitle
              title="Get your best looking smile now!"
              fontSize={14}
              lineHeight={20}
            />
          </Box>
          <Box
            width="315px"
            paddingX="40px"
            paddingY="35px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          >
            <Image
              style={{
                objectFit: "cover",
                width: "72px",
                height: "72px",
              }}
              src={CarbonBook}
              alt={"carbonbook"}
              loading="lazy"
            />
            <Title title="Concrete" />
            <SubTitle
              title="Defalcate is most focused in helping you discover your most beautiful smile"
              fontSize={14}
              lineHeight={20}
            />
          </Box>
          <Box
            width="315px"
            paddingX="40px"
            paddingY="35px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
          >
            <Image
              style={{
                objectFit: "cover",
                width: "72px",
                height: "72px",
              }}
              src={Arrow}
              alt={"arrow"}
              loading="lazy"
            />
            <Title title="Hack Growth" />
            <SubTitle
              title="Overcame any hurdle or any other problem."
              fontSize={14}
              lineHeight={20}
            />
          </Box>
        </Box>
      </Box>

      {/* Featured Posts */}
      <Box paddingY="112px">
        <Box marginBottom="80px">
          <SubTitle
            title="Practice Advice"
            color="#23A6F0"
            fontSize={14}
            lineHeight={24}
            weight={700}
            marginBottom="10px"
          />
          <Title title="Featured Posts" />
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 12, md: 15 }}
        >
          {[Bedroom, Kitchen, Flowers].map((pic, index) => (
            <Grid item xs={1} sm={4} md={5} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <Image height={300} src={pic} alt={`pic${index}`} />
                <CardContent sx={{ padding: "25px" }}>
                  <CardActions sx={{ padding: 0, marginBottom: "10px" }}>
                    <Button sx={{ padding: 0 }} size="small">
                      Google
                    </Button>
                    <Button sx={{ padding: 0 }} size="small">
                      Trending
                    </Button>
                    <Button sx={{ padding: 0 }} size="small">
                      New
                    </Button>
                  </CardActions>
                  <Title
                    gutterBottom
                    title="Loudest à la Madison #1 (L'integral)"
                    fontSize={20}
                    weight={400}
                    lineHeight={30}
                    textAlign="left"
                  />
                  <SubTitle
                    title="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    fontSize={14}
                    lineHeight={20}
                    textAlign="left"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
