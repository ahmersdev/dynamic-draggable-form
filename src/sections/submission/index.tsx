"use client";

import { FormProvider } from "@/components/react-hook-form";
import { componentMap } from "@/utils/component-map";
import { Box, Button, Grid, Typography } from "@mui/material";
import { createElement } from "react";
import useSubmission from "./use-submission";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Submission() {
  const { methods, handleSubmit, onSubmit, form } = useSubmission();

  return (
    <Box bgcolor={"secondary.50"} borderRadius={2} p={2}>
      {form.length ? (
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
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Typography variant={"h3"} color={"primary.main"}>
            YOU DO NOT HAVE ANY FORM TO SUBMIT YET
          </Typography>
          <Link href={ROUTES.CREATION}>
            <Button variant={"contained"}>Create One</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
