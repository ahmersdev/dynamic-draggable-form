import { Box } from "@mui/material";
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function DroppableFields() {
  const [items, setItems] = useState([
    { id: "1", content: "Drop Here 0" },
    { id: "2", content: "Drop Here 1" },
  ]);

  const droppableId = `droppable-${Date.now()}`;

  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <Box
          bgcolor={"secondary.50"}
          borderRadius={2}
          p={2}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  bgcolor={"red"}
                  my={1}
                >
                  {item.content}
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
