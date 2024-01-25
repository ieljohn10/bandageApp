import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import GridItem from "./components/GridItem/GridItem";
import Title from "./components/Title/Title";
import SubTitle from "./components/SubTitle/SubTitle";
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
  Utensils,
  UserProfile,
  AboutUs1,
  AboutUs2,
  AboutUs3,
  AboutUs4,
  AboutUs5,
  AboutUs6,
  AboutUs7,
  AboutUs8,
  AboutUs9,
} from "../assets/images";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container>
        {/* Grid Items */}
        <Box
          paddingY="80px"
          sx={{
            display: "grid",
            gridAutoFlow: { xs: "column", md: "row" },
            gridTemplateColumns: {
              xs: "100%",
              md: "repeat(10, 1fr)",
            },
            gridTemplateRows: {
              xs: "repeat(4, 331px)",
              md: "repeat(2, 308px)",
            },
            gap: "7px",
          }}
        >
          <GridItem
            sx={{
              gridColumn: { xs: "1 / 2", md: "1 / 5" },
              gridRow: { xs: "1/2", md: "1 / 3" },
            }}
            height={{ xs: "100%", md: 623 }}
            image={CardCover5}
            name={"cardcover5"}
          />
          <GridItem
            sx={{
              gridColumn: { xs: "1 / 2", md: "5 / 11" },
              gridRow: { xs: "2/3", md: "1 / 2" },
            }}
            height={{ xs: "100%", md: 308 }}
            image={CardCover6}
            name={"cardcover5"}
          />
          <GridItem
            sx={{
              gridColumn: { xs: "1 / 2", md: "5 / 8" },
              gridRow: { xs: "3/4", md: "2 / 3" },
            }}
            height={{ xs: "100%", md: 308 }}
            image={CardCover8}
            name={"cardcover5"}
          />
          <GridItem
            sx={{
              gridColumn: { xs: "1 / 2", md: "8 / 11" },
              gridRow: { xs: "4/5", md: "2 / 3" },
            }}
            height={{ xs: "100%", md: 308 }}
            image={CardCover7}
            name={"cardcover5"}
          />
        </Box>

        {/* Best Seller Products */}
        <Box paddingY="80px">
          <Box>
            <SubTitle title="Featured Products" variant="h6" fontWeight={600} />
            <Title title="BESTSELLER PRODUCTS" marginY="10px" />
            <SubTitle
              title="Problems trying to resolve the conflict between Products"
              variant="body1"
              fontWeight={500}
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
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 12, md: 20 }}
            >
              {Array.from(Array(20)).map((_, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
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
            <SubTitle title="Featured Products" variant="h6" fontWeight={600} />
            <Title title="THE BEST SERVICES" marginY="10px" />
            <SubTitle
              title="Problems trying to resolve the conflict between"
              variant="body1"
              fontWeight={500}
            />
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
          >
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
                variant="body2"
                fontWeight={500}
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
                variant="body2"
                fontWeight={500}
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
                variant="body2"
                fontWeight={500}
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
              variant="body1"
              fontWeight={700}
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
                <Card sx={{ maxWidth: 345, margin: { xs: "auto" } }}>
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
                      variant="h6"
                      fontWeight={500}
                      textAlign="left"
                    />
                    <SubTitle
                      title="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                      variant="body2"
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

        {/* About Us */}
        <Box
          paddingY="80px"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={{ xs: "320px", md: "438px" }}
          >
            <Title
              title="What they say about us"
              variant="h5"
              fontWeight={700}
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              paddingY="30px"
              marginY="28px"
              gap="24px"
            >
              <Image height={90} src={UserProfile} alt="utensils" />
              <SubTitle
                paddingX={2}
                title="Slate helps you see how many more days you need to work to reach your financial goal."
                variant="body2"
                fontWeight={700}
              />
              <Box>
                <SubTitle
                  title="Regina Miles"
                  variant="body2"
                  fontWeight={700}
                  color="#23A6F0"
                />
                <SubTitle
                  title="Designer"
                  variant="body2"
                  fontWeight={700}
                  marginY={1}
                />
              </Box>
            </Box>
          </Box>
          <Grid
            container
            spacing={1}
            columns={3}
            width={{ xs: "440px", md: "470px" }}
            alignItems="center"
            justifyContent="center"
          >
            {[
              AboutUs1,
              AboutUs2,
              AboutUs3,
              AboutUs4,
              AboutUs5,
              AboutUs6,
              AboutUs7,
              AboutUs8,
              AboutUs9,
            ].map((pic, index) => (
              <Grid
                item
                key={index}
                md={1}
                sx={{
                  height: { xs: 112, md: 142 },
                  width: { xs: 112, md: 142 },
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={pic}
                  alt={`camera${index}`}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        sx={{
          height: "640px",
          width: "100%",
        }}
      >
        <Image
          style={{
            position: "absolute",
          }}
          height={640}
          src={Utensils}
          alt="utensils"
        />
        <Box
          zIndex={10}
          width="700px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="30px"
        >
          <SubTitle
            title="Designing Better Experience"
            variant="body2"
            fontWeight={700}
            color="#23A6F0"
          />
          <Title
            title="Problems trying to resolve the conflict between"
            variant="h4"
          />
          <SubTitle
            title="Problems trying to resolve the conflict between the two major realms of Classical physics: "
            variant="body2"
          />
          <Typography
            textAlign="center"
            color="#23856D"
            variant="h5"
            fontWeight={700}
          >
            $16.48
          </Typography>
          <Button
            sx={{
              width: "292px",
            }}
            variant="contained"
          >
            ADD YOUR CALL TO ACTION
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box bgcolor={"#FAFAFA"}>
        <Container>
          <Title
            title="Bandages"
            textAlign="left"
            marginY="40px"
            paddingY="13px"
          />
          <Divider />
        </Container>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
          marginX="auto"
          justifyContent="space-between"
          paddingY="50px"
        >
          <Box>
            <Title
              title="Company Info"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="About Us"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Carrier"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="We are hiring"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Blog"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title title="Legal" variant="h6" textAlign="left" gutterBottom />
            <SubTitle
              title="About Us"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Carrier"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="We are hiring"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Blog"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Features"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Business Marketing"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="User Analytic"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Live Chat"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Unlimited Support"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Resources"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="IOS & Android"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Watch a Demo"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Customers"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="API"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Get In Touch"
              variant="h6"
              textAlign="left"
              gutterBottom
              marginBottom="20px"
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <Button sx={{ paddingX: "25px" }} variant="contained">
                    Subscribe
                  </Button>
                ),
              }}
            />
            <SubTitle
              title="Lore imp sum dolor Amit"
              variant="subtitle2"
              textAlign="left"
              marginY={0.5}
            />
          </Box>
        </Box>
      </Container>
      <Box paddingY={"40px"} bgcolor={"#FAFAFA"}>
        <Container>
          <SubTitle
            textAlign={{ xs: "center", md: "left" }}
            title={"Made With Love By Finland All Right Reserved "}
            variant="body2"
            fontWeight={700}
          />
        </Container>
      </Box>
    </>
  );
}
