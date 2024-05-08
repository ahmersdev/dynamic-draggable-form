import { Box, Button, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/components/strict-mode-droppable";
import { FormProvider } from "@/components/react-hook-form";
import { useForm } from "react-hook-form";
import React, { createElement } from "react";
import { componentMap } from "@/utils/component-map";

export default function DroppableFields({ form }: any) {
  const handleFormCreation = () => {
    localStorage?.setItem("form", JSON.stringify(form));
  };

  const methods: any = useForm({});

  return (
    <Droppable droppableId={"droppable"}>
      {(provided) => (
        <Box
          bgcolor={"secondary.50"}
          borderRadius={2}
          p={2}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {!!!form?.length ? (
            <Typography
              variant={"h3"}
              color={"primary.main"}
              textAlign={"center"}
            >
              Start Building Brilliance
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
                  >
                    <FormProvider methods={methods}>
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
