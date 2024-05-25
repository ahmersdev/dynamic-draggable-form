import React, { useCallback } from "react";
import { Box, FormLabel, Typography, useTheme } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function RHFDropZone({
  name,
  required,
  fileName = "Attach a file",
  fileType = "SVG, PNG, JPG or GIF (max 2 MB)",
  accept = {
    "image/png": [".png", ".PNG"],
    "image/jpeg": [".jpg", ".jpeg", ".JPG", ".JPEG"],
    "image/gif": [".gif", ".GIF"],
    "application/pdf": [".pdf"],
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/vnd.ms-excel": [".xls", ".xlsx"],
    "text/csv": [".csv"],
  },
  maxSize = 1024 * 1024 * 2,
  ...other
}: any) {
  const {
    setValue,
    getValues,
    clearErrors,
    formState: { errors },
  }: any = useFormContext();

  const theme: any = useTheme();
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      multiple: false,
      accept: accept,
      maxSize: maxSize,
      onDrop: useCallback(
        (files: any) => {
          if (files && files.length > 0) {
            setValue(name, files[0]);
            clearErrors(name);
          }
        },
        [setValue, name, clearErrors]
      ),
    });

  const formatFileSize = (sizeInBytes: any) => {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB.toFixed(2) + " MB";
  };

  return (
    <>
      {other?.label && (
        <FormLabel
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {other?.label}
          {required && (
            <Typography color={theme.palette.error.main} component="span">
              {" "}
              *
            </Typography>
          )}
        </FormLabel>
      )}

      <Box
        {...getRootProps()}
        sx={{
          border: errors[name] || !!fileRejections?.length ? 3 : 1,
          borderColor:
            errors[name] || !!fileRejections?.length
              ? theme.palette.error.main
              : theme?.palette?.secondary?.[500],
          borderRadius: 1,
          padding: 2,
          textAlign: "center",
          cursor: "pointer",
          mt: 0.5,
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <input {...getInputProps()} />

        {!!getValues(name)?.name ? (
          <Typography variant="body2">
            {acceptedFiles?.[0]?.name || getValues(name)?.name}
          </Typography>
        ) : (
          <Box>
            <CloudUploadIcon />
            <Typography variant="body1" fontWeight={"bold"}>
              {fileName}
            </Typography>
            <Typography variant="body2">
              <Typography
                component="span"
                fontSize={12}
                color={theme?.palette?.primary?.main}
              >
                Click to upload{" "}
              </Typography>
              or drag and drop
            </Typography>
            <Typography component="span" fontSize={12}>
              {fileType}
            </Typography>
          </Box>
        )}
      </Box>

      {!!errors[name] && !!!getValues(name)?.name && (
        <Typography
          variant={"body2"}
          component={"span"}
          sx={{ display: "block", textAlign: "center" }}
          color={"error.700"}
        >
          {errors[name]?.message}
        </Typography>
      )}
      {!!fileRejections?.length &&
        fileRejections?.map((fileError: any, index: any) => (
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{ display: "block", textAlign: "center" }}
            color={"error.700"}
            key={fileError?.errors?.[index]?.code}
          >
            {fileError?.errors?.[0]?.code === "file-too-large"
              ? `File size should be less than ${formatFileSize(maxSize)}`
              : `${fileError?.errors?.[0]?.message}`}
            <br />
            {fileError?.errors?.[1]?.code === "file-too-large"
              ? `File size should be less than ${formatFileSize(maxSize)}`
              : !!fileError?.errors?.[1]?.message &&
                `${fileError?.errors?.[1]?.message}`}
          </Typography>
        ))}
    </>
  );
}
