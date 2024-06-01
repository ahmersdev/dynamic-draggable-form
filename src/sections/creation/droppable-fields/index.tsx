import { Box, Button, IconButton, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/components/strict-mode-droppable";
import { FormProvider } from "@/components/react-hook-form";
import { useForm } from "react-hook-form";
import React, { createElement } from "react";
import { componentMap } from "@/utils/component-map";
import Cookies from "js-cookie";
import { COOKIES_KEYS } from "@/constants/strings";
import { successSnackbar } from "@/utils/snackbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function DroppableFields({ form, setForm, handleEdit }: any) {
  const handleFormCreation = () => {
    Cookies.set(COOKIES_KEYS.FORM_STORAGE_KEY, JSON.stringify(form));
    successSnackbar("Form Created Successfully");
  };

  const methods: any = useForm({});

  const handleDelete = (id: any) => {
    setForm((prevForm: any) =>
      prevForm?.filter((item: any) => item?.id !== id)
    );
  };

  return (
    <Droppable droppableId={"droppable"}>
      {(provided) => (
        <Box
          bgcolor={"secondary.50"}
          borderRadius={2}
          p={2}
          ref={provided.innerRef}
          height={"100%"}
          {...provided.droppableProps}
        >
          {!!!form?.length ? (
            <Typography
              variant={"h3"}
              color={"primary.main"}
              textAlign={"center"}
            >
              START BUILDING BRILLIANCE
            </Typography>
          ) : (
            form?.map((item: any, index: number) => (
              <Draggable key={item?.id} draggableId={item?.id} index={index}>
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    my={1}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"flex-end"}
                  >
                    <FormProvider methods={methods} style={{ width: "100%" }}>
                      {componentMap[item?.component] &&
                        createElement(
                          componentMap[item?.component],
                          {
                            ...item?.componentProps,
                            size: "small",
                            disabled: true,
                          },
                          item?.heading
                        )}
                    </FormProvider>
                    <Box display={"flex"}>
                      <IconButton
                        sx={{ color: "primary.light" }}
                        onClick={() => handleEdit(item?.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "error.600" }}
                        onClick={() => handleDelete(item?.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                )}
              </Draggable>
            ))
          )}
          {provided.placeholder}

          {!!form?.length && (
            <Button variant={"contained"} onClick={handleFormCreation}>
              Create
            </Button>
          )}
        </Box>
      )}
    </Droppable>
  );
}
