import {
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image from "../../img/Ointerest.jpg";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
  const navigate = useNavigate()
  return (
    <Stack id="gallery">
      <Typography
        sx={{
          width: "100%",
          height: "20dvh",
          backgroundColor: "#FBD45A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
        variant="h3"
      >
        Our photo gallery
      </Typography>
      <Stack padding={"5rem 6%"}>
        <Stack direction={"row"} gap={3} sx={{ overflowX: "scroll" }}>
          <style>
            {`
                ::-webkit-scrollbar {
                    display: none;
                }
            `}
          </style>
          <Card sx={{ maxWidth: "300px", minWidth: "300px" }} onClick={()=>navigate("/gallery")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
                sx={{
                  position: "relative",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  right: "0%",
                  bottom: "0%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(39, 39, 39, 0.2) 0%, rgba(39, 39, 39, 0.9) 100%)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  zIndex: 2,
                  transition: "opacity 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Card Content
              </Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", minWidth: "300px" }} onClick={()=>navigate("/gallery")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
                sx={{
                  position: "relative",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  right: "0%",
                  bottom: "0%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(39, 39, 39, 0.2) 0%, rgba(39, 39, 39, 0.9) 100%)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  zIndex: 2,
                  transition: "opacity 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Card Content
              </Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", minWidth: "300px" }} onClick={()=>navigate("/gallery")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
                sx={{
                  position: "relative",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  right: "0%",
                  bottom: "0%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(39, 39, 39, 0.2) 0%, rgba(39, 39, 39, 0.9) 100%)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  zIndex: 2,
                  transition: "opacity 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Card Content
              </Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", minWidth: "300px" }} onClick={()=>navigate("/gallery")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
                sx={{
                  position: "relative",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  right: "0%",
                  bottom: "0%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(39, 39, 39, 0.2) 0%, rgba(39, 39, 39, 0.9) 100%)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  zIndex: 2,
                  transition: "opacity 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Card Content
              </Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", minWidth: "300px" }} onClick={()=>navigate("/gallery")}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
                sx={{
                  position: "relative",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  right: "0%",
                  bottom: "0%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(39, 39, 39, 0.2) 0%, rgba(39, 39, 39, 0.9) 100%)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  opacity: 0,
                  zIndex: 2,
                  transition: "opacity 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "1rem",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Card Content
              </Typography>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Gallery;
