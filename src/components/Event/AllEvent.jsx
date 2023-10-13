import React from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
  } from "@mui/material";
  import cardImage2 from "../../img/Ointerest.jpg";
const AllEvent = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      gap={4}
      sx={{ padding: "4rem 6%"}}
    >
      <Stack  gap={3}>
        <Typography
          variant="span"
          sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
        >
          Upcoming events
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          Join our latest upcoming events
        </Typography>
        <Typography variant="span">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered.
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={2} flexWrap={"wrap"}>
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
        <Card sx={{ maxWidth: 310 }}>
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
  )
}

export default AllEvent