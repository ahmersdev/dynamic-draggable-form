import { Box, Typography } from "@mui/material";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { StrictModeDroppable as Droppable } from "@/components/strict-mode-droppable";
import { Draggable } from "react-beautiful-dnd";

export default function DraggableFields({ fieldsList }: any) {
  return (
    <Droppable droppableId={"draggable"}>
      {(provided) => (
        <Box
          bgcolor={"secondary.50"}
          borderRadius={2}
          p={2}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {fieldsList?.map((item: any, index: number) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <Box
                  key={index}
                  bgcolor={"background.default"}
                  borderRadius={2}
                  mb={index === fieldsList?.length - 1 ? 0 : 2}
                  p={1}
                  display={"flex"}
                  alignItems={"center"}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
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
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
}
