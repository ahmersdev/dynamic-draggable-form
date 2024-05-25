import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useDate({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        name: Yup?.string()?.trim()?.required("Name is Required"),
        dateFormat: Yup?.mixed()?.nullable(),
        required: Yup?.boolean()?.nullable(),
      })
    ),
    defaultValues: {
      name: "",
      dateFormat: null,
      required: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setOpen(false);
    const uniqueId = generateUniqueId();
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          required: data?.required,
          format: data?.dateFormat?.value,
          fullWidth: true,
          textFieldProps: { readOnly: true },
        },
        component: "RHFDatePicker",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit };
}
