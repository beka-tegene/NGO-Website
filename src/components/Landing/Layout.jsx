import {
  AppBar,
  Button,
  Divider,
  Icon,
  ImageListItem,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../img/Group 8.svg";
import { Email, Favorite, LocationOn, Phone } from "@mui/icons-material";
const Layout = () => {
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
        <ImageListItem>
          <img src={logo} alt="logo brand" />
        </ImageListItem>
        <Stack direction={"column"} gap={2}>
          <Stack direction={"row"} alignItems={"center"} gap={16}>
            <Typography variant="h6" sx={{ fontStyle: "italic" }}>
              Become a{" "}
              <Typography variant="span" sx={{ textDecoration: "underline" }}>
                volunteers
              </Typography>
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
                backgroundColor: "#00715D",
                padding: "1rem 5rem",
                borderRadius: "20px 0 0 0",
              }}
              direction={"row"}
              gap={5}
            >
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Home
              </Link>
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                About
              </Link>
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Donations
              </Link>
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Events
              </Link>
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Testimonial
              </Link>
              <Link
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                News
              </Link>
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
    </AppBar>
  );
};

export default Layout;
