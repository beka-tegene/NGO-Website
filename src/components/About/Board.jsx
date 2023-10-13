import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../img/120123184_4328203363916933_1038933823195937221_n.jpg";
const Board = () => {
  return (
    <Stack
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Stack direction={"row"} gap={2}>
        <ImageListItem sx={{ flex: "1 1 50%", display:"flex",alignItems:"center",justifyContent:"center" }}>
          <img
            src={image}
            alt="hoho"
            style={{ minWidth: "70%", maxWidth: "70%" ,minHeight:"60dvh",maxHeight:"60dvh"}}
          />
        </ImageListItem>
        <Stack gap={2} flex={"1 1 50%"}>
          <Typography fontSize={"25px"} fontWeight={"bold"}>Hello world</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam?
            Consectetur dolore quam animi eligendi, repellat quae cupiditate
            velit aspernatur cumque dolorum quasi aliquam unde aperiam, ex nisi
            harum culpa? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis magni asperiores temporibus. Beatae, deleniti dolorum
            atque impedit et quisquam consectetur maiores reiciendis quas
            accusantium assumenda, architecto praesentium dicta dolor aut.
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={2}>
        <Stack gap={2} flex={"1 1 50%"}>
          <Typography fontSize={"25px"} fontWeight={"bold"}>Hello world</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam?
            Consectetur dolore quam animi eligendi, repellat quae cupiditate
            velit aspernatur cumque dolorum quasi aliquam unde aperiam, ex nisi
            harum culpa? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis magni asperiores temporibus. Beatae, deleniti dolorum
            atque impedit et quisquam consectetur maiores reiciendis quas
            accusantium assumenda, architecto praesentium dicta dolor aut.
          </Typography>
        </Stack>
        <ImageListItem sx={{ flex: "1 1 50%", display:"flex",alignItems:"center",justifyContent:"center" }}>
          <img
            src={image}
            alt="hoho"
            style={{ minWidth: "70%", maxWidth: "70%" ,minHeight:"60dvh",maxHeight:"60dvh"}}
          />
        </ImageListItem>
      </Stack>
      <Stack direction={"row"} gap={2}>
        <ImageListItem sx={{ flex: "1 1 50%", display:"flex",alignItems:"center",justifyContent:"center" }}>
          <img
            src={image}
            alt="hoho"
            style={{ minWidth: "70%", maxWidth: "70%" ,minHeight:"60dvh",maxHeight:"60dvh"}}
          />
        </ImageListItem>
        <Stack gap={2} flex={"1 1 50%"}>
          <Typography fontSize={"25px"} fontWeight={"bold"}>Hello world</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam?
            Consectetur dolore quam animi eligendi, repellat quae cupiditate
            velit aspernatur cumque dolorum quasi aliquam unde aperiam, ex nisi
            harum culpa? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis magni asperiores temporibus. Beatae, deleniti dolorum
            atque impedit et quisquam consectetur maiores reiciendis quas
            accusantium assumenda, architecto praesentium dicta dolor aut.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Board;
