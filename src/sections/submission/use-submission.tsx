import { enqueueSnackbar } from "notistack";
import { createElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useSubmission() {
  const [form, setForm] = useState<any[]>([]);

  useEffect(() => {
    setForm(JSON.parse(localStorage?.getItem("form") || "[]"));
  }, []);

  // Validation Schema Creation
  const formSchema: any = form
    ?.map((item: any) => {
      const schema = Yup?.string();
      return item?.componentProps?.required
        ? {
            [item?.componentProps?.name]: schema?.required(
              `${item?.componentProps?.label} is Required`
            ),
          }
        : null;
    })
    ?.filter((val: any) => val !== null)
    ?.reduce((acc: any, obj: any) => {
      const key: any = Object.keys(obj)[0];
      const value = obj[key];
      acc[key] = value;
      return acc;
    }, {});

  // Initial Values Creation
  const initialValues: any = form
    ?.map((item: any) => {
      let initialValue: string | boolean | string[] = "";
      return { [item?.componentProps?.name]: initialValue };
    })
    ?.filter((item: any) => Object.keys(item)[0] !== "undefined")
    ?.reduce((acc: any, obj: any) => {
      const key: any = Object?.keys(obj)[0];
      const value = obj[key];
      acc[key] = value;
      return acc;
    }, {});

  const methods: any = useForm({
    resolver: yupResolver(Yup?.object()?.shape({ ...formSchema })),
    defaultValues: { ...initialValues },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset({ ...initialValues });
  }, [form, initialValues, reset]);

  const onSubmit = (data: any) => {
    enqueueSnackbar("Form Submitted Successfully", {
      variant: "success",
    });
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, form };
}
