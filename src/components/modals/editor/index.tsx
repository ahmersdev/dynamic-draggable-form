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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const textFieldValidationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Required"),
  placeholder: Yup?.string()?.trim(),
  required: Yup?.boolean()?.nullable(),
});

const textFieldDefaultValues: any = {
  name: "",
  placeholder: "",
  required: false,
};

export default function Editor({ open, setOpen, onSubmitCallback }: any) {
  const methods: any = useForm({
    resolver: yupResolver(textFieldValidationSchema),
    defaultValues: textFieldDefaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    onSubmitCallback(data);
  };

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
