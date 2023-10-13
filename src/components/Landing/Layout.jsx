import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Icon,
  IconButton,
  ImageListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../img/photo_2023-08-11_12-01-41-removebg-preview.png";
import {
  Email,
  Favorite,
  KeyboardArrowUp,
  LocationOn,
  Phone,
  Menu,
  Home,
} from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [openMenu, setOpenMenu] = useState();
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleSectionClick = (sectionId) => {
    navigate(`/#${sectionId}`);
    setOpenMenu(false);
  };
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
        <ImageListItem sx={{ maxWidth: 110, minWidth: 110 }}>
          <img
            src={logo}
            alt="logo_brand"
            style={{ maxWidth: 110, minWidth: 110 }}
          />
        </ImageListItem>
        <Stack
          direction={"column"}
          alignItems={"flex-end"}
          gap={2}
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
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
                <Typography variant="caption">2R39+VV5, Addis Ababa</Typography>
                <Typography variant="subtitle2">
                  Jacros - Salite Mehret Rd
                </Typography>
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
                to={"/#hero"}
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
                to={"/#about"}
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
                to={"/#donation"}
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
                to={"/#event"}
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
                to={"/#testimonial"}
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
                to={"/#news"}
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
              onClick={()=>navigate("/donation")}
            >
              Donate New
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "block",
              xs: "block",
            },
          }}
        >
          <IconButton onClick={handleMenuClick}>
            <Menu sx={{ color: "#272727", fontSize: "32px" }} />
          </IconButton>
        </Stack>
        <Drawer
          anchor={"right"}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#001F3F",
              height: "100dvh",
              color: "#B7B7B7",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ backgroundColor: "#001F3F", paddingBottom: "1rem" }}
              >
                <ImageListItem sx={{ width: "80px", height: "9vh" }}>
                  <img
                    src={`${logo}?w=164&h=164&fit=crop&auto=format`}
                    alt="Hero"
                  />
                </ImageListItem>
              </ListSubheader>
            }
          >
            <HashLink to={"#home"}>
              <ListItemButton
                sx={{ padding: "0.5rem 4rem .5rem 1rem" }}
                onClick={() => handleSectionClick("home")}
              >
                <ListItemIcon>
                  <Home sx={{ color: "#FFD70090" }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </HashLink>
          </List>
        </Drawer>
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
