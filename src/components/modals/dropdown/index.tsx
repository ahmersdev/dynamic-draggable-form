import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@/components/react-hook-form";
import useDropdown from "./use-dropdown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";

export default function Dropdown({ open, setOpen, form, setForm }: any) {
  const { methods, handleSubmit, onSubmit, fields, addOption, removeOption } =
    useDropdown({
      setOpen,
      setForm,
      form,
    });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle color={"primary.main"} variant={"h3"}>
        Dropdown Field Properties
      </DialogTitle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent style={{ paddingTop: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"name"}
                label={"Enter Field Name"}
                placeholder={"Name"}
                size={"small"}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <RHFTextField
                name={"placeholder"}
                label={"Enter Field Placeholder"}
                placeholder={"Placeholder"}
                size={"small"}
              />
            </Grid>

            <Grid item xs={12}>
              <RHFCheckbox name={"multiple"} label={"Is Multi Select Able?"} />
            </Grid>

            {fields?.map((count: any, countIndex: number) => (
              <Grid item xs={12} md={6} key={count.id}>
                <Box display={"flex"} alignItems={"end"} gap={1}>
                  <Box>
                    <RHFTextField
                      name={`options[${countIndex}].label`}
                      label={`Option - ${countIndex + 1}`}
                      placeholder={`${countIndex + 1}`}
                      size={"small"}
                      required
                    />
                  </Box>

                  <ClearIcon
                    sx={{ cursor: fields?.length > 1 ? "pointer" : "no-drop" }}
                    onClick={removeOption}
                  />
                </Box>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={1}
                onClick={addOption}
                sx={{ cursor: "pointer" }}
              >
                <AddCircleIcon color={"primary"} />
                <Typography variant={"h6"} color={"primary.main"}>
                  Add Option
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <RHFCheckbox name={"required"} label={"Is Field Mandatory"} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 2.4, pb: 1.6 }}>
          <Button type={"submit"} variant={"contained"}>
            Submit
          </Button>
          <Button
            type={"button"}
            variant={"outlined"}
            color={"inherit"}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
