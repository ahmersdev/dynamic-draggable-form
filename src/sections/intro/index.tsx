"use client";

import { Box, Button, Grid } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  RHFTextField,
  FormProvider,
  RHFTextEditor,
  RHFRadioGroup,
  RHFMultiCheckbox,
  RHFCheckbox,
} from "@/components/react-hook-form";
import { pxToRem } from "@/utils/get-font-value";

const workloadDataArray = [
  {
    id: 1,
    componentProps: {
      name: "textField",
      label: "Text Field",
      placeholder: "Text Field",
      required: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "paragraph",
      label: "Paragraph",
      placeholder: "Paragraph",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "description",
      label: "Description",
      placeholder: "Description",
      required: true,
      style: { height: pxToRem(250) },
    },
    component: RHFTextEditor,
  },
  {
    id: 4,
    componentProps: {
      name: "singleSelect",
      label: "Single Select",
      required: true,
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
    },
    component: RHFRadioGroup,
  },
  {
    id: 5,
    componentProps: {
      name: "multipleSelect",
      label: "Multiple Select",
      md: 6,
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
    },
    component: RHFMultiCheckbox,
  },
  {
    id: 6,
    componentProps: {
      name: "checkbox",
      label: "Checkbox",
      required: true,
    },
    component: RHFCheckbox,
  },
];

export default function Intro() {
  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        textField: Yup?.string()?.trim()?.required("Required"),
        paragraph: Yup?.string()?.trim(),
        description: Yup?.string()?.trim()?.required("Required"),
        singleSelect: Yup?.string()?.required("Required"),
        multipleSelect: Yup?.array(),
        checkbox: Yup?.boolean()?.oneOf([true], "Required"),
      })
    ),
    defaultValues: {
      textField: "",
      paragraph: "",
      description: "",
      singleSelect: "",
      multipleSelect: [],
      checkbox: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    enqueueSnackbar("Task Updated Successfully", {
      variant: "success",
    });
    console.log(data);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {workloadDataArray?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <item.component {...item?.componentProps} size={"small"} />
                </Grid>
              ))}
            </Grid>
            <Button type={"submit"}>Submit</Button>
          </FormProvider>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
          Drag Here
        </Box>
      </Grid>
    </Grid>
  );
}
