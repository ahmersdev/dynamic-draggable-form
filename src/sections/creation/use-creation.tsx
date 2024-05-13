import { useState } from "react";
import { fieldsList, modalInitialState } from "./creation.data";

export default function useCreation() {
  const [form, setForm] = useState<any>([]);
  const [modal, setModal] = useState<any>(modalInitialState);

  // Modal State Open Handler
  const getModalState = (draggedItem: any) => {
    const newModal: any = {
      title: false,
      text: false,
      editor: false,
      radio: false,
      multiple: false,
      date: false,
      upload: false,
      checkbox: false,
      dropdown: false,
    };

    if (draggedItem?.id !== undefined) {
      if (fieldsList[draggedItem?.id]) {
        const itemType = fieldsList[draggedItem.id]?.title
          ?.toLowerCase()
          ?.replace(/\s/g, "");
        if (newModal?.hasOwnProperty(itemType)) {
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

  return {
    handleDragEnd,
    form,
    setForm,
    modal,
    setModal,
  };
}
