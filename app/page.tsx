import { Box, Container } from "@mui/material";
import GridItem from "./components/GridItem/GridItem";
import {
  CardCover5,
  CardCover6,
  CardCover7,
  CardCover8,
} from "../assets/images";

export default function Home() {
  return (
    <Container>
      <Box
        marginY="80px"
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
    </Container>
  );
}
