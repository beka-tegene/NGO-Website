import {
  Box,
  Button,
  Divider,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import aboutImage from "../../img/120123184_4328203363916933_1038933823195937221_n.jpg";
const About = () => {
  return (
    <Stack
      direction={"row"}
      gap={20}
      sx={{ padding: "5rem 6%", position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "28%",
          height: "65vh",
          border: "5px solid #FBD45A",
          zIndex: "4",
          borderRadius: "0 0 50% 50%",
          top: "40px",
          left: "50px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "35%",
          height: "70vh",
          backgroundColor: "#F9F4E8",
          top: 0,
          left: 0,
        }}
      />
      <ImageListItem
        sx={{
          flex: "1 1 35%",
          borderRadius: "0 20% 50% 50%",
          overflow: "hidden",
        }}
      >
        <img src={aboutImage} alt="About Image" />
      </ImageListItem>
      <Stack direction={"column"} gap={2} sx={{ flex: "1 1 50%" }}>
        <Stack direction={"column"} gap={3} width={"70%"}>
          <Typography
            variant="span"
            sx={{ fontFamily: "cursive", color: "#00715D" }}
          >
            Welcome to GeTa NGO
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Helping each other can make world better
          </Typography>
          <Typography sx={{ color: "gray" }}>
            We help companies develop powerful corporate social responsibility,
            grant making, and employee engagement strategies. Our impact is
            about more than moving money to where it’s needed most it’s also
            about helping nonprofits access information and ideas that will help
            them listen, learn, and grow.
          </Typography>
          <Stack direction={"row"} alignItems={"center"} gap={3}>
            <Divider
              sx={{
                width: "5px",
                height: "6vh",
                backgroundColor: "#00715D",
              }}
            />
            <Typography>
              Helped fund <Typography variant="span" sx={{color:"#FBD45A"}}>24,537</Typography> Projects in{" "}
              <Typography variant="span" sx={{color:"#FBD45A"}}>24</Typography> Countries, Benefiting over{" "}
              <Typography variant="span" sx={{color:"#FBD45A"}}>8.2</Typography>
                {" "}Million people.
            </Typography>
          </Stack>
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
              Discover More
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
