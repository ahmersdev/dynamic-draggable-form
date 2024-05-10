import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
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
      const schema =
        item?.component === "RHFMultiCheckbox"
          ? Yup?.array()?.min(1, "At least 1 Required")
          : Yup?.string();
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
      if (item?.component === "RHFMultiCheckbox") {
        initialValue = [];
      }
      // else if ( el.answerType === EInputType.YesNo) {
      //   initialValue = false;
      // }
      else {
        initialValue = "";
      }
      return { [item?.componentProps?.name]: initialValue };
    })
    ?.filter((item: any) => Object.keys(item)[0] !== "undefined")
    ?.reduce((acc: any, obj: any) => {
      const key: any = Object?.keys(obj)[0];
      const value = obj[key];
      acc[key] = value;
      return acc;
    }, {});

  console.log(initialValues);

  const methods: any = useForm({
    resolver: yupResolver(Yup?.object()?.shape({ ...formSchema })),
    defaultValues: { ...initialValues },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    enqueueSnackbar("Form Submitted Successfully", {
      variant: "success",
    });
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, form };
}
