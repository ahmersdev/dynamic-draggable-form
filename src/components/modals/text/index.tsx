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
import useText from "./use-text";
import { typeDropDown } from "./text.data";
import { TEXT_TYPE_DROPDOWN } from "@/constants/strings";

export default function Text({ open, setOpen, form, setForm }: any) {
  const { methods, handleSubmit, onSubmit, type } = useText({
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
              <RHFAutocomplete
                name={"type"}
                label={"Select Field Type"}
                placeholder={"Placeholder"}
                size={"small"}
                options={typeDropDown}
                required
              />
            </Grid>

            {type === TEXT_TYPE_DROPDOWN.MULTI_LINE && (
              <Grid item xs={12}>
                <RHFTextField
                  name={"lineCount"}
                  label={"Enter Line Count"}
                  placeholder={"Placeholder"}
                  size={"small"}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <RHFCheckbox
                name={"required"}
                label={"Is Field Mandatory"}
                size={"small"}
              />
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
