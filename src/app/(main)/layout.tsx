"use client";

import Header from "@/layout/header";
import Navbar from "@/layout/navbar";
import { Box, Grid } from "@mui/material";
import { SnackbarProvider } from "notistack";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        <Grid container>
          <Grid item xxs={0} md={2} height={"100vh"} overflow={"hidden"}>
            <Navbar />
          </Grid>
          <Grid item xxs={12} md={10} p={2} height={"100vh"} overflow={"auto"}>
            <Header />
            <Box py={2}>{children}</Box>
          </Grid>
        </Grid>
      </SnackbarProvider>
    </main>
  );
};

export default AdminLayout;
