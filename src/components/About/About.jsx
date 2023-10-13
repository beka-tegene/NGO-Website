import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../img/photo_2023-08-11_12-01-41-removebg-preview.png";
import mission from "../../img/mission.png";
import vision from "../../img/vision.png";
import value from "../../img/value.png";
const About = () => {
  return (
    <Stack
      sx={{
        padding: "6rem 5%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack direction={"row"} gap={"25%"}>
        <Stack
          sx={{ width: "40%" }}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={2}
        >
          <Stack>
            <Typography fontSize={"20px"} fontWeight={"bold"} color={"#EF9B01"}>
              Who We Are
            </Typography>
            <Typography fontSize={"40px"} fontWeight={"bold"} color={"#3348BB"}>
              Way to your success!
            </Typography>
          </Stack>
          <Typography>
            The throng of shareholders makes Amhara Bank the most powerful and
            prominent bank in Ethiopia as it was established by more than 141
            thousand subscribers with 4.8 billion paid up and 6.5 billion
            subscribed capital. To meet the pressing needs of the public, and to
            contribute a milestone in the development of our country financial
            sector, Geez bank has come to existence. It has placed its
            groundwork through the unreserved commitment, hard work, due
            diligence, strong willpower of its organizers. These qualities, as
            its hallmark, will lead the way to feeding the banking sector with
            fund and reach out people with the mind of investment, innovations,
            and entrepreneurship.
          </Typography>
        </Stack>
        <ImageListItem sx={{ width: 345 }}>
          <img src={heroImage} alt="heroImage" />
        </ImageListItem>
      </Stack>
      <Stack
        direction={"row"}
        JustifyContent={"space-around"}
        sx={{ padding: "2rem 0" }}
      >
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={vision} alt="vision" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Vision
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={mission} alt="mission" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Mission
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
        <Stack alignItems={"center"} sx={{ width: "40%" }} gap={2}>
          <ImageListItem sx={{ width: 80 }}>
            <img src={value} alt="value" />
          </ImageListItem>
          <Typography variant="h5" fontWeight={"bold"}>
            Core Value
          </Typography>
          <Typography sx={{ textAlign: "center", width: "85%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia
            maxime debitis ullam
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
