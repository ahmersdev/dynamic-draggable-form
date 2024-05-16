import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@/components/react-hook-form";
import useDropdown from "./use-dropdown";

export default function Dropdown({ open, setOpen, form, setForm }: any) {
  const { methods, handleSubmit, onSubmit, fields } = useDropdown({
    setOpen,
    setForm,
    form,
  });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle color={"primary.main"} variant={"h3"}>
        Field Properties
      </DialogTitle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent style={{ paddingTop: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"name"}
                label={"Enter Field Name"}
                placeholder={"Title"}
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
              <RHFTextField
                name={"count"}
                label={"Enter Options Count"}
                placeholder={"Count"}
                size={"small"}
                required
              />
            </Grid>

            {fields?.map((count: any, countIndex: number) => (
              <Grid item xs={12} md={6} key={count.id}>
                <RHFTextField
                  name={`options[${countIndex}].label`}
                  label={`Option - ${countIndex + 1}`}
                  size={"small"}
                  required
                />
              </Grid>
            ))}

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
