import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const ReactQuillEditor = ({
  value,
  onChange,
  style,
  toolbar,
  ...other
}: any) => {
  const theme: any = useTheme();
  const modules = {
    toolbar: toolbar || {
      container: [
        [
          { size: ["small", false, "large", "huge"] },
          { align: [] },
          "color",
          "bold",
          "italic",
          "underline",
          "strike",
          "background",
          { list: "bullet" },
          { list: "ordered" },
          "link",
          "image",
          "code-block",
          "blockquote",
        ],
      ],
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        border: 1,
        borderColor: other?.error
          ? theme?.palette?.error?.main
          : other?.isFocused
          ? theme.palette.primary.main
          : theme?.palette?.secondary?.[500],
        borderRadius: 1,
        mt: 0.5,
        overflow: "hidden",
        color: theme.palette.text.primary,
        "& .ql-toolbar.ql-snow": {
          backgroundColor: theme?.palette?.background?.default,
          border: "none",
          "& .ql-picker-label, & .ql-picker-item": {
            color: theme.palette.primary.main,
          },
          "& path, line, polygon, polyline, rect, circle, svg": {
            stroke: theme.palette.primary.main,
            fill: theme.palette.secondary[50],
          },
        },
        "& .ql-container.ql-snow": {
          border: "none",
        },
        "& .ql-blank::before": {
          color: theme.palette.text.secondary,
          fontStyle: "normal",
        },
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
        "&:focus-within": {
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <ReactQuill
        value={value}
        onChange={(newValue) => onChange(newValue)}
        modules={modules}
        style={{ position: "relative", ...style }}
        {...other}
      />
    </Box>
  );
};

export default ReactQuillEditor;
