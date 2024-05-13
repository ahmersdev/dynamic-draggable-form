import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./editor.data";

export default function useEditor({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
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
        component: "RHFTextEditor",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit };
}
