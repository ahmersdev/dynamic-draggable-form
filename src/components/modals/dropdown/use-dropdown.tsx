import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues } from "./dropdown.data";
import { useEffect, useState } from "react";

export default function useDropdown({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState(defaultValues);

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { label, placeholder, options, required, multiple } =
          itemToEdit?.componentProps;

        const transformedOptions = options?.map((option: any) => ({
          label: option,
        }));

        setInitialValues({
          name: label,
          placeholder,
          options: transformedOptions,
          required,
          multiple,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit, control, reset } = methods;

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, methods, reset]);

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
    const options = data?.options.map((option: any) => option.label);
    if (editId) {
      setForm((prevForm: any) =>
        prevForm?.map((item: any) =>
          item?.id === editId
            ? {
                ...item,
                componentProps: {
                  name: data?.name?.replace(/\s/g, ""),
                  label: data?.name,
                  placeholder: data?.placeholder,
                  required: data?.required,
                  options: options,
                  multiple: data?.multiple,
                },
              }
            : item
        )
      );
    } else {
      const uniqueId = generateUniqueId();
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
    }
  };

  return { methods, handleSubmit, onSubmit, fields, addOption, removeOption };
}
