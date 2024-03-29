"use client";

import { Grid } from "@mui/material";
import DraggableFields from "./draggable-fields";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableFields from "./droppable-fields";
import { fieldsList } from "./creation.data";
import { Title } from "@/components/modals";
import useCreation from "./use-creation";

export default function Creation() {
  const { handleDragEnd, form, modal, setModal, handleOnSubmitTitle } =
    useCreation();

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <DroppableFields form={form} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DraggableFields fieldsList={fieldsList} />
          </Grid>
        </Grid>
      </DragDropContext>
      {modal?.title && (
        <Title
          open={modal?.title}
          setOpen={setModal}
          onSubmitCallback={handleOnSubmitTitle}
        />
      )}
    </>
  );
}
