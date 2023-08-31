import {
  AppBar,
  Button,
  Divider,
  Icon,
  IconButton,
  ImageListItem,
  Stack,
  Toolbar,
  Typography,
  keyframes,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../img/photo_2023-08-11_12-01-41-removebg-preview.png";
import arrow from "../../img/main-menu-shape-1.png";
import { Email, Favorite, KeyboardArrowUp, LocationOn, Phone } from "@mui/icons-material";
import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";

const slideInAnimation = keyframes`
  0% {
    transform: translateX(-20%);
  }
  50% {
    transform: translateX(20%);
  }
  100%{
    transform: translateX(-20%);
  }
`;

const AnimatedDiv = styled.div`
  width: 110px;
  height: 100px;
  animation: ${slideInAnimation} 2s ease-in-out infinite;
`;

const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#283734",
        padding: "0 5%",
        position: "sticky",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0 0 0",
        }}
      >
        <ImageListItem sx={{ width: "110px" }}>
          <img src={logo} alt="logo brand" />
        </ImageListItem>
        <AnimatedDiv sx={{ width: "110px" }}>
          <img src={arrow} alt="arrow brand" />
        </AnimatedDiv>
        <Stack direction={"column"} gap={2}>
          <Stack direction={"row"} alignItems={"center"} gap={16}>
            <Typography variant="h6" sx={{ fontStyle: "italic" }}>
              Become a{" "}
              <HashLink
                to={"#volunteer"}
                Style={{ textDecoration: "underline", color: "#3051F8" }}
              >
                volunteers
              </HashLink>
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={5}>
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Icon>
                  <Phone />
                </Icon>
                <Stack>
                  <Typography variant="caption">Helpline</Typography>
                  <Typography variant="subtitle2">+251 911 456 878</Typography>
                </Stack>
              </Stack>
              <Divider
                sx={{ width: "2px", height: "7vh", backgroundColor: "#ececec" }}
              />
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Icon>
                  <Email />
                </Icon>
                <Stack>
                  <Typography variant="caption">Send email</Typography>
                  <Typography variant="subtitle2">getango@gmail.com</Typography>
                </Stack>
              </Stack>
              <Divider
                sx={{ width: "2px", height: "7vh", backgroundColor: "#ececec" }}
              />
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Icon>
                  <LocationOn />
                </Icon>
                <Stack>
                  <Typography variant="caption">
                    2R39+VV5, Addis Ababa
                  </Typography>
                  <Typography variant="subtitle2">
                    Jacros - Salite Mehret Rd
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"} flex={"auto"}>
            <Stack
              sx={{
                backgroundColor: "#1a7cc4",
                padding: "1rem 5rem",
                borderRadius: "20px 0 0 0",
              }}
              direction={"row"}
              gap={5}
            >
              <HashLink
                to={"#hero"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Home
              </HashLink>
              <HashLink
                to={"#about"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                About
              </HashLink>
              <HashLink
                to={"#donation"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Donations
              </HashLink>
              <HashLink
                to={"#event"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Events
              </HashLink>
              <HashLink
                to={"#testimonial"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Testimonial
              </HashLink>
              <HashLink
                to={"#news"}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                News
              </HashLink>
            </Stack>
            <Button
              sx={{
                flex: "auto",
                backgroundColor: "#FBD45A",
                color: "#272727",
                borderRadius: "0",
                "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
              }}
              variant="contained"
              startIcon={<Favorite />}
            >
              Donate New
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
      {showScrollButton && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "#1a7cc4",
            color: "#FFFFFF",
          }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </IconButton>
      )}
    </AppBar>
  );
};

export default Layout;
