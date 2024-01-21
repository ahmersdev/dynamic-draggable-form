"use client";

import { Box, Grid } from "@mui/material";
import DraggableFields from "./draggable-fields";

export default function Creation() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
          Drop Here
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
          <DraggableFields />
        </Box>
      </Grid>
    </Grid>
  );
}
