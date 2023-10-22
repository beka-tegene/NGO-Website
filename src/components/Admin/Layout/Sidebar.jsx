import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Collections,
  Dashboard,
  EventRepeat,
  Handshake,
  Logout,
  Newspaper,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: 245,
        background: "#232D3F",
        height: "100dvh",
        position: "sticky",
        top: 0,
        pt: 2,
      }}
      gap={5}
    >
      <Typography sx={{ color: "#FFFFFF" }} variant="h6">
        ጌታ በጎ አድራጎት ድርጅት
        <br />
        GeTa Charity Organization
      </Typography>
      <Stack>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            onClick={() => navigate("/admin-dashboard")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Dashboard sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/admin-news")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Newspaper sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="News" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/admin-event")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <EventRepeat sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Event" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/admin-gallery")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Collections sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Gallery" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/admin-testimonial")}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Handshake sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Testimonial" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              localStorage.clear();
              window.location.href = "/admin-login";
            }}
            sx={{ "&:hover": { background: "#EF9B01" } }}
          >
            <ListItemIcon>
              <Logout sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "#FFFFFF" }} />
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
