import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const JoinVolunteers = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={4}
      sx={{ padding: "5rem 6%", backgroundColor: "#385b75", color: "#FFFFFF" }}
    >
      <Typography
        variant="span"
        sx={{ fontFamily: "cursive", color: "#FFFFFF" }}
      >
        Become a Volunteers
      </Typography>
      <Typography textAlign={"center"} fontWeight={900} variant="h2">
        Join your hand with us for a <br />
        better life and future
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FBD45A",
          color: "#272727",
          borderRadius: 6,
          padding: ".7rem 1.5rem",
          "&:hover": { backgroundColor: "#272727", color: "#FFFFFF" },
        }}
      >
        Join Now
      </Button>
    </Stack>
  );
};

export default JoinVolunteers;
