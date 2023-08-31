import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import cardImage from "../../img/Olana-and-Taye.jpg";
import cardImage2 from "../../img/Ointerest.jpg";
import cardImage3 from "../../img/12-los-angeles-ethiopian-orthodox-tewahedo-wedding-photography.jpg";
const Donate = () => {
  return (
    <Stack
    id='donate'
      direction={"column"}
      alignItems={"center"}
      gap={4}
      sx={{ padding: "5rem 6%" }}
    >
      <Typography
        variant="span"
        sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
      >
        Help & donate us now
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 900 }} textAlign={"center"}>
        Find the popular cause <br /> and donate them
      </Typography>
      <Stack
        direction={"column"}
        flexWrap={"wrap"}
        gap={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cardImage}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                Let’s education for children get good life
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cardImage2}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                It is a long established fact that a reader
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cardImage3}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                There are many variations of passages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cardImage3}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
              >
                There are many variations of passages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Donate;
