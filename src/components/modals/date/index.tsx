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
  RHFAutocomplete,
  RHFCheckbox,
  RHFTextField,
} from "@/components/react-hook-form";
import useDate from "./use-data";

export default function Date({ open, setOpen, form, setForm }: any) {
  const { methods, handleSubmit, onSubmit } = useDate({
    setOpen,
    setForm,
    form,
  });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle color={"primary.main"} variant={"h3"}>
        Date Field Properties
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
              <RHFAutocomplete
                name={"dateFormat"}
                label={"Date Format"}
                placeholder={"Select"}
                size={"small"}
                options={[
                  { label: "MM/DD/YYYY", value: "MM/dd/yyyy" },
                  { label: "DD/MM/YYYY", value: "dd/MM/yyyy" },
                  { label: "YYYY/MM/DD", value: "yyyy/MM/dd" },
                ]}
                getOptionLabel={(option: any) => option?.label}
              />
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
