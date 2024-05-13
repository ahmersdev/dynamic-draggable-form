import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";

export default function Title({ open, setOpen, form, setForm }: any) {
  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        title: Yup?.string()?.trim()?.required("Title is Required"),
      })
    ),
    defaultValues: { title: "" },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setOpen(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        heading: data?.title,
        componentProps: { variant: "h3", color: "primary.main" },
        component: "Typography",
      },
    ]);
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
                name={"title"}
                label={"Enter Section Title"}
                placeholder={"Title"}
                size={"small"}
                required
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
