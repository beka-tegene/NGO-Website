import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import cardImage2 from "../../img/Ointerest.jpg";
const Event = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={4}
      sx={{ padding: "5rem 6%" ,backgroundColor:"#F9F4E8"}}
    >
      <Stack flex={"1 1 30%"} gap={3}>
        <Typography
          variant="span"
          sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
        >
          Upcoming events
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 900 }} >
          Join our latest upcoming events
        </Typography>
        <Typography variant="span" >
          There are many variations of passages of lorem ipsum available but the
          majority have suffered.
        </Typography>
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
      <Stack direction={"row"} alignItems={"center"} gap={2} flex={"1 1 70%"}>
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
        </Card>{" "}
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
        </Card>{" "}
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
    </Stack>
  );
};

export default Event;
