import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

export default function useCheckbox({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState({
    name: "",
    required: false,
  });

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { label, required } = itemToEdit?.componentProps;
        setInitialValues({
          name: label,
          required,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        name: Yup?.string()?.trim()?.required("Name is Required"),
        required: Yup?.boolean()?.nullable(),
      })
    ),
    defaultValues: initialValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const onSubmit = (data: any) => {
    setOpen(false);
    if (editId) {
      setForm((prevForm: any) =>
        prevForm?.map((item: any) =>
          item?.id === editId
            ? {
                ...item,
                componentProps: {
                  name: data?.name?.replace(/\s/g, ""),
                  label: data?.name,
                  required: data?.required,
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
            required: data?.required,
          },
          component: "RHFCheckbox",
        },
      ]);
    }
  };

  return { methods, handleSubmit, onSubmit };
}
