import { useFormContext, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { FormLabel, Typography, useTheme } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function RHFDatePicker({
  name,
  label,
  required,
  format = "MM/dd/yyyy",
  ...other
}: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && (
            <FormLabel
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {label}
              {required && (
                <Typography color={theme.palette.error.main} component="span">
                  {" "}
                  *
                </Typography>
              )}
              <br />
            </FormLabel>
          )}

          <DatePicker
            {...field}
            {...other}
            format={format}
            slots={{
              openPickerIcon: CalendarMonthIcon,
            }}
            slotProps={{
              textField: {
                ...other?.textFieldProps,
                helperText: (
                  <Typography
                    variant={"body2"}
                    component={"span"}
                    sx={{ display: "block", textAlign: "center" }}
                    color={"error.700"}
                  >
                    {error?.message}
                  </Typography>
                ),
                error: !!error,
                fullWidth: other?.fullWidth,
                size: other?.size,
                label: "",
              },
            }}
            sx={{
              width: "100%",
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
          />
        </>
      )}
    />
  );
}
