import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Donetion = () => {
  return (
    <Stack sx={{ padding: "5rem 6%" }} alignItems={'center'} gap={2}>
      <Typography
        variant="span"
        sx={{ fontFamily: "cursive", color: "#1a7cc4" }}
      >
        Help & donate us now
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 900 }} textAlign={"center"}>
        Find the popular cause <br /> and donate them
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of Bank</TableCell>
              <TableCell>Account Name</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Swift code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Commercial bank of Ethiopia
              </TableCell>
              <TableCell>Geta charity</TableCell>
              <TableCell>1000454547877</TableCell>
              <TableCell>CBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Commercial bank of Ethiopia
              </TableCell>
              <TableCell>Geta charity</TableCell>
              <TableCell>1000454547877</TableCell>
              <TableCell>CBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Commercial bank of Ethiopia
              </TableCell>
              <TableCell>Geta charity</TableCell>
              <TableCell>1000454547877</TableCell>
              <TableCell>CBE</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Commercial bank of Ethiopia
              </TableCell>
              <TableCell>Geta charity</TableCell>
              <TableCell>1000454547877</TableCell>
              <TableCell>CBE</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Donetion;
