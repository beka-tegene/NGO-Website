import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import cardImage2 from "../../img/Ointerest.jpg";
import { FormatQuote } from "@mui/icons-material";

const Testimonial = () => {
  return (
    <Stack
      id="testimonial"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={4}
      sx={{ padding: "5rem 6%", backgroundColor: "#385b75", color: "#FFFFFF" }}flexWrap={"wrap"}
    >
      <Stack flex={"1 1 40%"} gap={3}>
        <Typography
          variant="span"
          sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
        >
          Our Testimonials
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          What they are talking about oxpins
        </Typography>
        <Typography variant="span">
          Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
          efficitur. Vestibulum viverra, dolor sit amet ultricies ornare, elit
          justo pretium tellus.
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FBD45A",
              color: "#272727",
              borderRadius: 6,
              padding: "1rem 2rem",
              "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
            }}
          >
            All Testimonial
          </Button>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
        flex={"1 1 60%"}
        justifyContent={"center"}flexWrap={"wrap"}
        mt={6}
      >
        <Card
          sx={{
            width: 450,
            border: "7px solid #FBD45A",
            position: "relative",
            overflow: "visible",
            borderRadius: 3,
          }}
        >
          <Avatar
            alt="Travis Howard"
            src={cardImage2}
            sx={{
              width: 120,
              height: 120,
              border: "7px solid #FBD45A",
              position: "absolute",
              top: "-75px",
              left: "20px",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "-70px",
              left: "150px",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
            variant="h5"
          >
            John Deo
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "-40px",
              left: "150px",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#FBD45A",
            }}
          >
            Volunteer
          </Typography>
          <Typography
            sx={{
              padding: "75px 2rem 3rem ",
              fontSize: "18px",
              letterSpacing: "0.1em",
            }}
          >
            Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
            efficitur. Vestibulum viverra, dolor sit amet ultricies ornare, elit
            justo pretium tellus.
          </Typography>
          <Avatar
            alt="Travis Howard"
            sx={{
              width: 60,
              height: 60,
              border: "7px solid #FBD45A",
              position: "absolute",
              top: "-30px",
              right: "20px",
              backgroundColor: "#385b75",
            }}
          >
            <FormatQuote sx={{ fontSize: "32px" }} />
          </Avatar>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Testimonial;
