"use client";

import { Box, Typography, Grid } from "@mui/material";
import usePreview from "./use-preview";

export default function Preview() {
  const { preview, renderValue } = usePreview();

  return (
    <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
      {preview ? (
        <>
          <Typography
            variant={"h3"}
            color={"primary.main"}
            textAlign={"center"}
          >
            Preview Data
          </Typography>

          <Grid container spacing={2}>
            {Object.keys(preview).map((key: any) => (
              <Grid item xs={12} key={key}>
                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <Typography variant={"h6"}>{key}: </Typography>
                  <Typography variant={"body1"}>
                    {renderValue(preview[key])}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant={"h3"} color={"primary.main"} textAlign={"center"}>
          YOU HAVE NOTHING TO PREVIEW
        </Typography>
      )}
    </Box>
  );
}
