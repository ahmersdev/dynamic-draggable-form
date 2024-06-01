import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./dropdown.data";

export default function useDropdown({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const addOption = () => {
    append({ label: "" });
  };

  const removeOption = (index: any) => {
    if (fields?.length > 1) {
      remove(index);
    }
  };

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
          multiple: data?.multiple,
        },
        component: "RHFAutocomplete",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit, fields, addOption, removeOption };
}
