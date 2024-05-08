"use client";

import { FormProvider } from "@/components/react-hook-form";
import { componentMap } from "@/utils/component-map";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { createElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export default function Submission() {
  const [form, setForm] = useState<any[]>([]);

  useEffect(() => {
    setForm(JSON.parse(localStorage?.getItem("form") || "[]"));
  }, []);

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
  }, [form]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {form?.map((item: any) => (
            <Grid item xs={12} key={item?.id}>
              {componentMap[item?.component] &&
                createElement(
                  componentMap[item?.component],
                  {
                    ...item?.componentProps,
                    size: "small",
                  },
                  item?.heading
                )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button variant={"contained"} type={"submit"}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
}
