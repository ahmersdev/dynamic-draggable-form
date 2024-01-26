"use client";

import { Grid, Typography } from "@mui/material";
import DraggableFields from "./draggable-fields";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableFields from "./droppable-fields";
import { useState } from "react";
import { fieldsList, modalInitialState } from "./creation.data";
import { Title } from "@/components/modals";

export default function Creation() {
  const [form, setForm] = useState<any>([]);
  const [modal, setModal] = useState<any>(modalInitialState);

  const getModalState = (draggedItem: any) => {
    const newModal: any = {
      title: false,
      text: false,
      editor: false,
      singleSelection: false,
      multipleSelection: false,
      date: false,
      upload: false,
      singleCheckbox: false,
      dropdown: false,
    };

    if (draggedItem?.id !== undefined) {
      if (fieldsList[draggedItem.id]) {
        const itemType = fieldsList[draggedItem.id]?.title.toLowerCase();
        if (newModal.hasOwnProperty(itemType)) {
          newModal[itemType] = true;
        }
      }
    }

    return newModal;
  };

  const handleOnSubmitTitle = (data: any) => {
    setModal(false);
    setForm([
      ...form,
      {
        id: String(form?.length + 1),
        heading: data?.title,
        componentProps: { variant: "h3", color: "primary.main" },
        component: Typography,
      },
    ]);
  };

  const handleDragEnd = (result: any) => {
    const draggedItem = fieldsList?.find(
      (item: any) => item?.id === result?.draggableId
    );

    setModal(getModalState(draggedItem));
  };

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
