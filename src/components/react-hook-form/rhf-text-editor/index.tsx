import { useFormContext, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { FormLabel, Typography, useTheme } from "@mui/material";
import ReactQuillEditor from "@/components/react-quill-editor";

export default function RHFEditor({ name, required, disabled, ...other }: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box position="relative">
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

          <ReactQuillEditor
            id={name}
            name={name}
            value={field?.value}
            onChange={field?.onChange}
            error={!!error}
            readOnly={disabled}
            {...other}
          />

          {error?.message && (
            <Typography
              variant={"body2"}
              component={"span"}
              sx={{ display: "block", textAlign: "center" }}
              color={"error.700"}
            >
              {error?.message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
}
