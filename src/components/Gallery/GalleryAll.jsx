import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../img/Ointerest.jpg";
const GalleryAll = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      sx={{ padding: "1rem 6%" }}
    >
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
      <ImageList>
        <ImageListItem >
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
        <ImageListItem>
          <img src={image} alt="gallery" />
        </ImageListItem>
      </ImageList>
    </Stack>
  );
};

export default GalleryAll;
