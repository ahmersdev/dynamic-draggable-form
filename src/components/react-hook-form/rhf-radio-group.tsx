import { useFormContext, Controller } from "react-hook-form";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  useTheme,
  Typography,
} from "@mui/material";

export default function RHFRadioGroup({
  name,
  options,
  required,
  disabled,
  ...other
}: any) {
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

          <RadioGroup {...field} row {...other}>
            {options?.map((option: any) => (
              <FormControlLabel
                key={option?.value}
                value={option?.value}
                control={<Radio />}
                label={option?.label}
                disabled={disabled}
              />
            ))}
          </RadioGroup>

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
