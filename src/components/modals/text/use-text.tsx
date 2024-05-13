import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./text.data";

export default function useText({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const type = watch("type");

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
          placeholder: data?.placeholder,
          type:
            data?.type === "Multi Line" || data?.type === "Single Line"
              ? "text"
              : data?.type?.toLowerCase(),
          required: data?.required,
          multiline: data?.type === "Multi Line" ? true : false,
          rows: data?.lineCount,
        },
        component: "RHFTextField",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit, type };
}
