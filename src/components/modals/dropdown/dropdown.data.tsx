import * as Yup from "yup";

export const validationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  placeholder: Yup?.string()?.trim(),
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
  placeholder: "",
  count: 2,
  options: [{ label: "" }, { label: "" }],
  required: false,
};
