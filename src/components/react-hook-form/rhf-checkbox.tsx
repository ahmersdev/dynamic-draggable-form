import { useFormContext, Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  Typography,
  useTheme,
} from "@mui/material";

export default function RHFCheckbox({ name, required, ...other }: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Checkbox
                {...field}
                checked={field?.value}
                disabled={other?.disabled}
              />

              {other?.label && (
                <FormLabel
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  {other?.label}
                  {required && (
                    <Typography
                      color={theme.palette.error.main}
                      component="span"
                    >
                      {" "}
                      *
                    </Typography>
                  )}
                </FormLabel>
              )}

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
            </>
          )}
        />
      }
      label=""
    />
  );
}
