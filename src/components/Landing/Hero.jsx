import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../img/12-los-angeles-ethiopian-orthodox-tewahedo-wedding-photography.jpg";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <Stack
      id="hero"
      direction={"row"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#385b75",
        color: "#FFFFFF",
        padding: "0 0 0 6%",
        height: {
          xl: "none",
          lg: "none",
          md: "none",
          sm: "70dvh",
          xs: "70dvh",
        },
      }}
      flexWrap={"wrap"}
    >
      <Stack
        direction={"column"}
        flex={"1 1 50%"}
        gap={3}
        sx={{ width: "80%" }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#FBD45A", textAlign: "center", fontWeight: "600" }}
        >
          GeTa Charity organization
        </Typography>
        <Typography variant="span" sx={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          exercitationem quod perspiciatis nihil harum aspernatur fugiat nulla
          libero?
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              flex: "auto",
              backgroundColor: "#FBD45A",
              color: "#272727",
              borderRadius: 6,
              "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
            }}
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </Box>
      </Stack>
      <ImageListItem
        sx={{
          flex: "1 1 50%",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <img src={heroImage} alt="Hero_Image" />
      </ImageListItem>
    </Stack>
  );
};

export default Hero;
