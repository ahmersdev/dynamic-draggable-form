"use client";

import { Grid } from "@mui/material";
import DraggableFields from "./draggable-fields";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableFields from "./droppable-fields";

export default function Creation() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <DroppableFields />
        </Grid>
        <Grid item xs={12} md={4}>
          <DraggableFields />
        </Grid>
      </Grid>
    </DragDropContext>
  );
}
