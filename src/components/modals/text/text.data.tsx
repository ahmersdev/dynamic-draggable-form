import { TEXT_TYPE_DROPDOWN } from "@/constants/strings";
import * as Yup from "yup";

export const typeDropDown = [
  TEXT_TYPE_DROPDOWN.SINGLE_LINE,
  TEXT_TYPE_DROPDOWN.MULTI_LINE,
  TEXT_TYPE_DROPDOWN.EMAIL,
  TEXT_TYPE_DROPDOWN.PASSWORD,
  TEXT_TYPE_DROPDOWN.URL,
];

export const validationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  placeholder: Yup?.string()?.trim(),
  type: Yup?.mixed()?.nullable()?.required("Select Type of Field"),
  lineCount: Yup?.number()?.positive("Must be Above 0"),
  required: Yup?.boolean()?.nullable(),
});

export const defaultValues: any = {
  name: "",
  placeholder: "",
  type: null,
  lineCount: 3,
  required: false,
};
