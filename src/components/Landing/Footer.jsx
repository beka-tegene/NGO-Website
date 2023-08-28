import {
  Email,
  Facebook,
  Favorite,
  Instagram,
  Phone,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { Button, Icon, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../img/photo_2023-08-11_12-01-41-removebg-preview.png";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      sx={{ backgroundColor: "#385b75", color: "#FFFFFF" }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={10}
        sx={{
          padding: "3rem 6%",
          backgroundColor: "#385b75",
          color: "#FFFFFF",
        }}
      >
        <Stack flex={"1 1 20%"} gap={3}>
          <ImageListItem sx={{ width: "110px" }}>
            <img src={logo} alt="logo" />
          </ImageListItem>
          <Typography variant="body2">
            Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
            efficitur. Vestibulum viverra, dolor sit amet ultricies.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#FBD45A",
              color: "#272727",
              borderRadius: 2,
              "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
            }}
            variant="contained"
            startIcon={<Favorite />}
          >
            Donate New
          </Button>
        </Stack>
        <Stack flex={"1 1 20%"} gap={3}>
          <Typography variant="h6" fontWeight={"bold"}>
            Links
          </Typography>
          <Stack gap={1.5}>
            <HashLink>About us</HashLink>
            <HashLink>Contact</HashLink>
            <HashLink>Latest News</HashLink>
            <HashLink>Recent Events</HashLink>
            <HashLink>Donations</HashLink>
          </Stack>
        </Stack>
        <Stack flex={"1 1 20%"} gap={3}>
          <Typography variant="h6" fontWeight={"bold"}>
            Non profit
          </Typography>
          <Stack gap={1.5}>
            <HashLink>Differently Abled Kids</HashLink>
            <HashLink>Help Child Cancer</HashLink>
            <HashLink>Clean Pure Water</HashLink>
            <HashLink>Give them Education</HashLink>
            <HashLink>Start a Fundraising</HashLink>
          </Stack>
        </Stack>
        <Stack flex={"1 1 20%"} gap={3}>
          <Typography variant="h6" fontWeight={"bold"}>
            Contact
          </Typography>
          <Stack gap={1.5}>
            <Typography variant="body2">
              2R39+VV5, Addis Ababa Jacros - Salite Mehret Rd
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Icon>
                <Phone />
              </Icon>
              <Stack>
                <Typography variant="subtitle2">+251 911 456 878</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Icon>
                <Email />
              </Icon>
              <Stack>
                <Typography variant="subtitle2">getango@gmail.com</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={3}>
            <Twitter />
            <Facebook />
            <Instagram />
            <Telegram />
          </Stack>
        </Stack>
      </Stack>
      <Typography
        sx={{
          backgroundColor: "#142e42",
          width: "100%",
          textAlign: "center",
          padding: "1.5rem 0",
        }}
      >
        © All Copyright 2023 by GeTa.com
      </Typography>
    </Stack>
  );
};

export default Footer;
