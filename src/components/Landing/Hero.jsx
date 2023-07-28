import { Box, Button, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../img/12-los-angeles-ethiopian-orthodox-tewahedo-wedding-photography.jpg";
const Hero = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ backgroundColor: "#293835", color: "#FFFFFF", padding: "0 0 0 6%" }}
    >
      <Stack
        direction={"column"}
        flex={"1 1 40%"}
        gap={3}
        sx={{ width: "80%" }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#FBD45A", textAlign: "center", fontWeight: "600" }}
        >
          GETA non-governmental organization
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
              backgroundColor: "#FFFFFF",
              color: "#272727",
              borderRadius: "0",
              "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Stack>
      <ImageListItem>
        <img src={heroImage} alt="Hero Image" />
      </ImageListItem>
    </Stack>
  );
};

export default Hero;
