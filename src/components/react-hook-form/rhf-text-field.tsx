import { useFormContext, Controller } from "react-hook-form";
import { FormLabel, TextField, Typography, useTheme } from "@mui/material";

export default function RHFTextField({ name, required, ...other }: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
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
          <TextField
            {...field}
            fullWidth
            error={!!error}
            inputProps={{
              style: {
                color: theme.palette.text.primary,
              },
              sx: {
                "&::placeholder": {
                  color: theme.palette.text.secondary,
                  opacity: 1,
                },
              },
            }}
            sx={{
              mt: 0.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": {
                  borderColor: theme?.palette?.secondary?.[500],
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme?.palette?.primary?.[900],
                },
              },
            }}
            helperText={
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ display: "block", textAlign: "center" }}
                color={"error.700"}
              >
                {error?.message}
              </Typography>
            }
            {...other}
            label=""
          />
        </>
      )}
    />
  );
}
