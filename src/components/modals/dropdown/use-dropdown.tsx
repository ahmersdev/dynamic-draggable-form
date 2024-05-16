import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./dropdown.data";

export default function useDropdown({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, watch, control } = methods;

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
          append({ label: "" });
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

  const onSubmit = (data: any) => {
    setOpen(false);
    const uniqueId = generateUniqueId();
    const options = data?.options.map((option: any) => option.label);
    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          placeholder: data?.placeholder,
          required: data?.required,
          options: options,
        },
        component: "RHFAutocomplete",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit, fields };
}
