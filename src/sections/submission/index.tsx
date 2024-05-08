"use client";

import { FormProvider } from "@/components/react-hook-form";
import { componentMap } from "@/utils/component-map";
import { Box, Button, Grid } from "@mui/material";
import { createElement } from "react";
import useSubmission from "./use-submission";

export default function Submission() {
  const { methods, handleSubmit, onSubmit, form } = useSubmission();

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
