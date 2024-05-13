import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerTitle } from "./header.data";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavbar from "../drawer-navbar";

const Header = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"secondary.50"}
        borderRadius={2}
        p={{ xs: 1, md: "12px 24px" }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "primary.main",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Typography variant={"h3"} color={"primary.main"}>
            {headerTitle(pathName)}
          </Typography>
        </Box>
      </Box>

      <DrawerNavbar setOpen={setOpen} open={open} />
    </>
  );
};

export default Header;
