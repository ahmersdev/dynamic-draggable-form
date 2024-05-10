import { useFormContext, Controller } from "react-hook-form";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  FormLabel,
  Typography,
  useTheme,
} from "@mui/material";

export default function RHFMultiCheckbox({
  md,
  required,
  name,
  label,
  options,
  ...other
}: any) {
  const { control } = useFormContext();

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const onSelected = (option: any) => {
          const selectedValues = field?.value || [];
          if (selectedValues.some((item: any) => item === option?.value)) {
            return selectedValues.filter(
              (value: any) => value !== option?.value
            );
          } else {
            return [...selectedValues, option?.value];
          }
        };

        return (
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
              </FormLabel>
            )}
            <FormGroup>
              <Grid container>
                {options?.map((option: any) => (
                  <Grid item xs={12} md={md} key={option?.value}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field?.value?.some(
                            (item: any) => item === option?.value
                          )}
                          onChange={() => field?.onChange(onSelected(option))}
                        />
                      }
                      label={option?.label}
                      {...other}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>

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
        );
      }}
    />
  );
}
