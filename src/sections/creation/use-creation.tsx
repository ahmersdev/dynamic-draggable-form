import { useState } from "react";
import { fieldsList, modalInitialState } from "./creation.data";
import { Typography } from "@mui/material";

export default function useCreation() {
  const [form, setForm] = useState<any>([]);
  const [modal, setModal] = useState<any>(modalInitialState);

  // Modal State Open Handler
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

  // Drag End Handler
  const handleDragEnd = (result: any) => {
    if (result?.destination?.droppableId === "droppable") {
      const draggedItem = fieldsList?.find(
        (item: any) => item?.id === result?.draggableId
      );

      setModal(getModalState(draggedItem));
    }
  };

  // Title Submission Handler
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

  return { handleDragEnd, form, modal, setModal, handleOnSubmitTitle };
}
