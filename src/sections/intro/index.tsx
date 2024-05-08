"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
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
  RHFDatePicker,
  RHFDropZone,
  RHFAutocomplete,
} from "@/components/react-hook-form";
import { pxToRem } from "@/utils/get-font-value";

const workloadDataArray = [
  {
    id: 0,
    heading: "Form",
    componentProps: { variant: "h3", color: "primary.main" },
    component: Typography,
  },
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
  {
    id: 7,
    componentProps: {
      name: "date",
      label: "Date",
      required: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    componentProps: {
      name: "dropZone",
      label: "Drop Zone",
      required: true,
    },
    component: RHFDropZone,
  },
  {
    id: 9,
    componentProps: {
      name: "autoSingle",
      label: "Auto Single",
      placeholder: "Auto Single",
      required: true,
      options: ["1", "2", "3", "4"],
    },
    component: RHFAutocomplete,
  },
  {
    id: 10,
    componentProps: {
      name: "autoMulti",
      label: "Auto Multi",
      placeholder: "Auto Multi",
      required: true,
      multiple: true,
      options: ["1", "2", "3", "4"],
    },
    component: RHFAutocomplete,
  },
];

const validationSchema: any = Yup?.object()?.shape({
  textField: Yup?.string()?.trim()?.required("Required"),
  paragraph: Yup?.string()?.trim(),
  description: Yup?.string()?.trim()?.required("Required"),
  singleSelect: Yup?.string()?.required("Required"),
  multipleSelect: Yup?.array(),
  checkbox: Yup?.boolean()?.oneOf([true], "Required"),
  date: Yup?.date()?.nullable()?.required("Required"),
  dropZone: Yup?.mixed()?.nullable()?.required("Required"),
  autoSingle: Yup?.string()?.required("Required"),
  autoMulti: Yup?.array()?.min(1, "Required")?.required("Required"),
});

const defaultValues = {
  textField: "",
  paragraph: "",
  description: "",
  singleSelect: "",
  multipleSelect: [],
  checkbox: false,
  date: null,
  dropZone: null,
  autoSingle: "",
  autoMulti: [],
};

export default function Intro() {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    enqueueSnackbar("Form Submitted Successfully", {
      variant: "success",
    });
    console.log(data);
  };

  return (
    <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {workloadDataArray?.map((item: any) => (
            <Grid item xs={12} key={item?.id}>
              <item.component {...item?.componentProps} size={"small"}>
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>
        <Button type={"submit"} variant={"outlined"}>
          Submit
        </Button>
      </FormProvider>
    </Box>
  );
}
