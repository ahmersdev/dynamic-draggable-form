import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useTitle({ setOpen, setForm, form }: any) {
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

  return { methods, handleSubmit, onSubmit };
}
