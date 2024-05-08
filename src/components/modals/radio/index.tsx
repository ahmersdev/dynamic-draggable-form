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
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";

const validationSchema: any = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  count: Yup?.number()
    ?.positive("Must be Above 0")
    ?.required("Total Options are Required"),
  options: Yup?.array()?.of(
    Yup?.object()?.shape({
      label: Yup?.string()?.required(),
    })
  ),
  required: Yup?.boolean()?.nullable(),
});

const defaultValues: any = {
  name: "",
  count: 2,
  options: [
    { label: "", value: "" },
    { label: "", value: "" },
  ],
  required: false,
};

export default function Radio({ open, setOpen, onSubmitCallback }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, watch, control, setValue, reset } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const count = watch("count");

  useEffect(() => {
    const diff = count - fields?.length;

    const makeChanges = () => {
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          append({ label: "", value: "" });
        }
      } else if (diff < 0) {
        for (let i = 0; i < -diff; i++) {
          remove(fields?.length - 1);
        }
      }
    };

    const timeoutId = setTimeout(makeChanges, 500);

    return () => clearTimeout(timeoutId);
  }, [count, fields, append, remove]);

  // fields?.forEach((_, index) => {
  //   const label = watch(`options[${index}].label`);
  //   useEffect(() => {
  //     methods?.setValue(`options[${index}].value`, label);
  //   }, [label, methods, index, methods]);
  // });

  // useEffect(() => {
  //   fields.forEach((_, index) => {
  //     const label = watch(`options[${index}].label`);
  //     methods?.setValue(`options[${index}].value`, label);
  //   });
  // }, [fields, methods, watch]);

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
