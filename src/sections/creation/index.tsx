"use client";

import { Grid } from "@mui/material";
import DraggableFields from "./draggable-fields";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableFields from "./droppable-fields";
import { fieldsList } from "./creation.data";
import {
  Editor,
  MultiCheckbox,
  Radio,
  Text,
  Title,
  Date,
  Dropzone,
  Checkbox,
} from "@/components/modals";
import useCreation from "./use-creation";

export default function Creation() {
  const { handleDragEnd, form, setForm, modal, setModal } = useCreation();

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
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.text && (
        <Text
          open={modal?.text}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.editor && (
        <Editor
          open={modal?.editor}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.radio && (
        <Radio
          open={modal?.radio}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.multiple && (
        <MultiCheckbox
          open={modal?.multiple}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.date && (
        <Date
          open={modal?.date}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.upload && (
        <Dropzone
          open={modal?.upload}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}

      {modal?.checkbox && (
        <Checkbox
          open={modal?.checkbox}
          setOpen={setModal}
          form={form}
          setForm={setForm}
        />
      )}
    </>
  );
}
