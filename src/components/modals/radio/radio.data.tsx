import * as Yup from "yup";

export const validationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  count: Yup?.number()
    ?.positive("Must be Above 0")
    ?.required("Total Options are Required"),
  options: Yup?.array()?.of(
    Yup?.object()?.shape({
      label: Yup?.string()?.required("Required"),
    })
  ),
  required: Yup?.boolean()?.nullable(),
});

export const defaultValues: any = {
  name: "",
  count: 2,
  options: [
    { label: "", value: "" },
    { label: "", value: "" },
  ],
  required: false,
};
