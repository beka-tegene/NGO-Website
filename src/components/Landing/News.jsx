import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../img/Ointerest.jpg";
const News = () => {
  return (
    <Stack
    id='news'
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      sx={{ padding: "5rem 6%" }}
    >
      <Typography
        variant="span"
        sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
      >
        News & articles
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 900, textAlign: "center" }}>
        Directly from the <br /> latest news and articles
      </Typography>
      <Stack direction={"row"} gap={3}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
};

export default News;
