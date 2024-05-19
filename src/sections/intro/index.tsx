"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import {
  CreatingAForm,
  DynamicFormCreation,
  PreviewData,
  SubmittingAForm,
} from "./intro.data";

export default function Intro() {
  const dynamicFormCreation = DynamicFormCreation();

  return (
    <Box
      bgcolor={"secondary.50"}
      borderRadius={2}
      p={2}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
    >
      <Typography variant={"h2"} color={"primary.main"}>
        Welcome to the Dynamic Form Builder Project
      </Typography>

      <Typography variant={"h3"} color={"primary.main"}>
        Overview
      </Typography>
      <Typography variant={"h6"}>
        Welcome to the Dynamic Form Builder Project, a powerful and flexible
        tool designed to help you create, customize, and manage forms with ease.
        This project showcases the capabilities of modern web development using
        Next.js 14, Material-UI, and various other technologies to provide a
        seamless and interactive user experience.
      </Typography>

      <Typography variant={"h3"} color={"primary.main"}>
        Key Features
      </Typography>

      <Typography variant={"h4"}>1. Theme Switching</Typography>
      <Typography variant={"h6"}>
        My project supports dynamic theme switching, allowing you to toggle
        between light and dark modes. Additionally, you can change the primary
        color of the theme, choosing from blue, green, indigo, and yellow. This
        feature ensures that the application looks great and is comfortable to
        use in any lighting condition.
      </Typography>

      <Typography variant={"h4"}>2. Dynamic Form Creation</Typography>
      <Typography variant={"h6"}>
        The core feature of this project is the ability to create forms
        dynamically using a drag-and-drop interface. You can build forms by
        selecting and customizing various field types. The available field types
        include:
      </Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          py: 0,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {Object.entries(dynamicFormCreation).map(([key, value]: any) => (
          <ListItem key={key}>
            <Typography variant={"h6"}>
              <Typography variant={"h6"} component={"span"} fontWeight={900}>
                {key}
              </Typography>
              {value}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant={"h6"}>
        Each field can be customized with features like name, placeholder, and
        whether it is required.
      </Typography>

      <Typography variant={"h4"}>3. Form Creation Page</Typography>
      <Typography variant={"h6"}>
        On the Form Creation Page, you can build your form by dragging and
        dropping the desired fields into place. Customize each field&apos;s
        properties according to your needs. Once you have configured your form,
        it is saved in cookies for easy retrieval and editing later.
      </Typography>

      <Typography variant={"h4"}>4. Form Submission Page</Typography>
      <Typography variant={"h6"}>
        The Form Submission Page lets you fill out the forms you created. Users
        can enter data into the fields as specified during the creation process.
        Upon submission, the entered data is saved in cookies, ensuring that
        your input is stored securely and can be reviewed later.
      </Typography>

      <Typography variant={"h4"}>5. Preview Page</Typography>
      <Typography variant={"h6"}>
        The Preview Page provides a summary of the data you have submitted. This
        page displays the information in a clear and organized manner, allowing
        you to review your responses.
      </Typography>

      <Typography variant={"h3"} color={"primary.main"}>
        How It Works
      </Typography>

      <Typography variant={"h4"}>1. Theme Switching</Typography>
      <Typography variant={"h6"}>
        You can switch between light and dark themes, and change the primary
        color by accessing the theme settings icon at the bottom of the screen.
      </Typography>

      <Typography variant={"h4"}>2. Creating a Form</Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          py: 0,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {CreatingAForm.map((item: any) => (
          <ListItem key={item}>
            <Typography variant={"h6"}>{item}</Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant={"h4"}>3. Submitting a Form</Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          py: 0,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {SubmittingAForm.map((item: any) => (
          <ListItem key={item}>
            <Typography variant={"h6"}>{item}</Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant={"h4"}>4. Previewing Data</Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 2,
          py: 0,
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {PreviewData.map((item: any) => (
          <ListItem key={item}>
            <Typography variant={"h6"}>{item}</Typography>
          </ListItem>
        ))}
      </List>

      <Typography variant={"h3"} color={"primary.main"}>
        Conclusion
      </Typography>
      <Typography variant={"h6"}>
        This project is a demonstration of creating a flexible and interactive
        form-building application using modern web technologies. Whether you are
        a developer looking to learn more about Next.js, Material-UI, and
        dynamic form creation, or a user who needs a powerful tool for creating
        and managing forms, this project has something to offer.
      </Typography>
      <Typography variant={"h6"}>
        Feel free to explore each feature, create your forms, and see how easy
        it is to manage form data with this dynamic form builder.
      </Typography>
    </Box>
  );
}
