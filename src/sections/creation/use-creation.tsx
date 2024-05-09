import { useState } from "react";
import { fieldsList, modalInitialState } from "./creation.data";
import { generateUniqueId } from "@/utils/generate-unique-id";

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
      singleCheckbox: false,
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

  // Title Submission Handler
  const handleOnSubmitTitle = (data: any) => {
    setModal(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        heading: data?.title,
        componentProps: { variant: "h3", color: "primary.main" },
        component: "Typography",
      },
    ]);
  };

  // Text Field Submission Handler
  const handleOnSubmitText = (data: any) => {
    setModal(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          placeholder: data?.placeholder,
          type:
            data?.type === "Multi Line" || data?.type === "Single Line"
              ? "text"
              : data?.type?.toLowerCase(),
          required: data?.required,
          multiline: data?.type === "Multi Line" ? true : false,
          rows: data?.lineCount,
        },
        component: "RHFTextField",
      },
    ]);
  };

  // Editor Submission Handler
  const handleOnSubmitEditor = (data: any) => {
    setModal(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          required: data?.required,
        },
        component: "RHFTextEditor",
      },
    ]);
  };

  // Radio Group Submission Handler
  const handleOnSubmitRadio = (data: any) => {
    setModal(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          required: data?.required,
          options: data?.options,
        },
        component: "RHFRadioGroup",
      },
    ]);
  };

  // Multiple Selection Submission Handler
  const handleOnSubmitMultipleSelection = (data: any) => {
    setModal(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          required: data?.required,
          options: data?.options,
        },
        component: "RHFMultiCheckbox",
      },
    ]);
  };

  return {
    handleDragEnd,
    form,
    modal,
    setModal,
    handleOnSubmitTitle,
    handleOnSubmitText,
    handleOnSubmitEditor,
    handleOnSubmitRadio,
    handleOnSubmitMultipleSelection,
  };
}
