import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./multi-checkbox.data";

export default function useMultiCheckbox({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, watch, control, setValue } = methods;

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

  const onSubmit = (data: any) => {
    fields.forEach((_, index) => {
      const label = watch(`options[${index}].label`);
      setValue(`options[${index}].value`, label);
    });
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
          options: data?.options,
        },
        component: "RHFMultiCheckbox",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit, fields };
}
