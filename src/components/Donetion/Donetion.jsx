import { Stack, Table, TableBody, TableHead, TableRow } from "@mui/material";
import React from "react";

const Donetion = () => {
  return (
    <Stack sx={{ padding: "5rem 6%" }}>
      <Table>
        <TableHead>
          <TableRow>Name of Bank</TableRow>
          <TableRow>Account</TableRow>
        </TableHead>
        <TableBody>
          <TableRow>Commercial bank of Ethiopia</TableRow>
          <TableRow>1000789854567</TableRow>
        </TableBody>
      </Table>
    </Stack>
  );
};

export default Donetion;
