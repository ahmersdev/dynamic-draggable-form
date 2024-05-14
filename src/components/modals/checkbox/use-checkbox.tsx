import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useCheckbox({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        name: Yup?.string()?.trim()?.required("Name is Required"),
        required: Yup?.boolean()?.nullable(),
      })
    ),
    defaultValues: {
      name: "",
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
        },
        component: "RHFCheckbox",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit };
}
