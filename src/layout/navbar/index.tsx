import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { mainRoutesArray, mainStyles } from "./navbar.data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const theme: any = useTheme();

  return (
    <Box
      height={"100%"}
      bgcolor={"secondary.50"}
      p={{ md: 1, lg: 2 }}
      display={{ xxs: "none", md: "block" }}
    >
      <Link href={"/"} style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={"h4"} color={"primary.main"} textAlign={"center"}>
          Dynamic Forms
        </Typography>
      </Link>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"96%"}
        pt={2}
      >
        <List>
          {mainRoutesArray?.map((item: any) => (
            <ListItem key={item?.id} sx={{ px: 0 }}>
              <Link href={item?.href} style={{ width: "100%" }}>
                <ListItemButton sx={mainStyles(item?.href, pathName, theme)}>
                  <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                    <item.icon
                      sx={{
                        color:
                          pathName === item?.href
                            ? theme?.palette?.grey?.[100]
                            : theme?.palette?.secondary?.[400],
                      }}
                    />
                  </ListItemIcon>
                  {item?.label}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
