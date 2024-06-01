import * as Yup from "yup";

export const fileTypeAcceptOptions = [
  "PNG",
  "JPEG",
  "GIF",
  "PDF",
  "MS Word",
  "DOCX",
  "MS Excel",
  "CSV",
];

export const validationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  fileTypeText: Yup?.string()?.trim(),
  fileTypeAccept: Yup?.array()?.min(1, "One File Type is Required"),
  size: Yup?.number()?.positive("Must be above 0"),
  required: Yup?.boolean()?.nullable(),
});

export const defaultValues: any = {
  name: "",
  placeholder: "",
  fileTypeAccept: [],
  size: 2,
  required: false,
};

export const fileTypeMapping: any = {
  PNG: {
    "image/png": [".png", ".PNG"],
  },
  JPEG: {
    "image/jpeg": [".jpg", ".jpeg", ".JPG", ".JPEG"],
  },
  GIF: {
    "image/gif": [".gif", ".GIF"],
  },
  PDF: {
    "application/pdf": [".pdf"],
  },
  "MS Word": {
    "application/msword": [".doc"],
  },
  DOCX: {
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
  },
  "MS Excel": {
    "application/vnd.ms-excel": [".xls", ".xlsx"],
  },
  CSV: {
    "text/csv": [".csv"],
  },
};
