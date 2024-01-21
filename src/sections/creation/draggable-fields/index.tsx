import { Box, Typography } from "@mui/material";
import { fieldsList } from "./draggable-fields.data";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

export default function DraggableFields() {
  return (
    <>
      {fieldsList?.map((item: any, index: number) => (
        <Box
          key={index}
          bgcolor={"background.default"}
          borderRadius={2}
          mb={index === fieldsList.length - 1 ? 0 : 2}
          p={1}
          display={"flex"}
          alignItems={"center"}
        >
          <BlurOnRoundedIcon />
          <LinearScaleIcon sx={{ transform: "rotate(90deg)" }} />
          <Box
            bgcolor={"secondary.50"}
            display={"flex"}
            alignItems={"center"}
            mr={1}
            p={0.5}
            borderRadius={1}
          >
            {item?.icon}
          </Box>
          <Box>
            <Typography variant={"body1"} color={"text.primary"}>
              {item?.title}
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"}>
              {item?.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
}
