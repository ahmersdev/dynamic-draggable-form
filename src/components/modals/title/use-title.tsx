import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

export default function useTitle({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState({ title: "" });

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { heading } = itemToEdit;
        setInitialValues({
          title: heading,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(
      Yup?.object()?.shape({
        title: Yup?.string()?.trim()?.required("Title is Required"),
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
                heading: data?.title,
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
          heading: data?.title,
          componentProps: { variant: "h3", color: "primary.main" },
          component: "Typography",
        },
      ]);
    }
  };

  return { methods, handleSubmit, onSubmit };
}
