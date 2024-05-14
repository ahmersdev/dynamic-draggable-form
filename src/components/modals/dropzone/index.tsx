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
import useDropzone from "./use-dropzone";
import { fileTypeAcceptOptions } from "./dropzone.data";

export default function Dropzone({ open, setOpen, form, setForm }: any) {
  const { methods, handleSubmit, onSubmit } = useDropzone({
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
                name={"fileTypeText"}
                label={"Message"}
                placeholder={"SVG, PNG, JPG or GIF (max 2 MB)"}
                size={"small"}
              />
            </Grid>

            <Grid item xs={12}>
              <RHFAutocomplete
                name={"fileTypeAccept"}
                label={"File to Upload"}
                placeholder={"Upload"}
                size={"small"}
                options={fileTypeAcceptOptions}
                required
                multiple
              />
            </Grid>

            <Grid item xs={12}>
              <RHFTextField
                name={"size"}
                label={"Size"}
                placeholder={"Size"}
                size={"small"}
              />
            </Grid>

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
