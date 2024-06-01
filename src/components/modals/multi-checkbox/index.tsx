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
import useMultiCheckbox from "./use-multi-checkbox";

export default function MultiCheckbox({
  open,
  setOpen,
  form,
  setForm,
  editId,
}: any) {
  const { methods, handleSubmit, onSubmit, fields } = useMultiCheckbox({
    setOpen,
    setForm,
    form,
    editId,
  });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle color={"primary.main"} variant={"h3"}>
        Multi Checkbox Field Properties
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
                  placeholder={`${countIndex + 1}`}
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
