import { Fragment, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  TextField,
  Autocomplete,
  Typography,
  Paper,
  useTheme,
  FormLabel,
  Chip,
} from "@mui/material";

export default function RHFAutocomplete({
  name,
  options,
  required,
  noOptionsText = "Nothing in the List",
  multiple = false,
  placeholder,
  getOptionLabel = (option: any) => option?.replaceAll?.("_", " "),
  ...other
}: any) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  const theme: any = useTheme();

  const onChanged = (e: any, newValue: any, onChange: any) => {
    if (multiple) {
      onChange(newValue?.map((item: any) => item));
    } else {
      onChange(newValue);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            open={open}
            multiple={multiple}
            value={value || null}
            isOptionEqualToValue={(option, value) => option === value}
            filterSelectedOptions
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            options={options}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, onChange);
            }}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip {...getTagProps({ index })} key={option} label={option} />
              ));
            }}
            autoComplete
            noOptionsText={noOptionsText}
            getOptionLabel={getOptionLabel}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: theme?.palette?.background?.default,
                  color: theme.palette.text.primary,
                }}
              >
                {props?.children}
              </Paper>
            )}
            {...other}
            renderInput={(params) => (
              <>
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

                <TextField
                  {...params}
                  label=""
                  error={!!error}
                  placeholder={placeholder}
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
                  InputProps={{
                    ...params?.InputProps,
                    endAdornment: (
                      <Fragment>{params?.InputProps?.endAdornment}</Fragment>
                    ),
                  }}
                />
              </>
            )}
          />
        );
      }}
    />
  );
}
