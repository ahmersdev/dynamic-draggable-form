import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import { validationSchema, defaultValues, typeDropDown } from "./text.data";
import { useEffect, useState } from "react";

export default function useText({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState(defaultValues);

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { label, placeholder, type, rows, required, multiline } =
          itemToEdit?.componentProps;
        const typeValue =
          type === "text" && multiline
            ? "Multi Line"
            : type === "text" && !multiline
            ? "Single Line"
            : typeDropDown.find((t) => t.toLowerCase() === type);
        setInitialValues({
          name: label,
          placeholder,
          type: typeValue,
          lineCount: rows,
          required,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit, watch, reset } = methods;

  const type = watch("type");

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
                  placeholder: data?.placeholder,
                  type:
                    data?.type === "Multi Line" || data?.type === "Single Line"
                      ? "text"
                      : data?.type?.toLowerCase(),
                  required: data?.required,
                  multiline: data?.type === "Multi Line" ? true : false,
                  rows: data?.lineCount,
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
    }
  };

  return { methods, handleSubmit, onSubmit, type };
}
