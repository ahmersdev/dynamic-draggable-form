import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  DateFormatOptions,
  defaultValues,
  validationSchema,
} from "./date.data";

export default function useDate({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState(defaultValues);

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { label, format, required } = itemToEdit?.componentProps;
        setInitialValues({
          name: label,
          dateFormat:
            DateFormatOptions?.find((option) => option?.value === format) ||
            null,
          required,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, methods, reset]);

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
                  format: data?.dateFormat?.value,
                  fullWidth: true,
                  textFieldProps: { readOnly: true },
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
            format: data?.dateFormat?.value,
            fullWidth: true,
            textFieldProps: { readOnly: true },
          },
          component: "RHFDatePicker",
        },
      ]);
    }
  };

  return { methods, handleSubmit, onSubmit };
}
