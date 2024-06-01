import TextFormatIcon from "@mui/icons-material/TextFormat";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TitleIcon from "@mui/icons-material/Title";

export const fieldsList = [
  {
    id: "0",
    title: "Title",
    icon: <TitleIcon />,
    description: "Title of Form/Section",
  },
  {
    id: "1",
    title: "Text",
    icon: <TextFormatIcon />,
    description: "Single Line, Multi Line, Email, Password, URL",
  },
  {
    id: "2",
    title: "Editor",
    icon: <BorderColorIcon />,
    description: "Customizable Editor",
  },
  {
    id: "3",
    title: "Radio",
    icon: <RadioButtonCheckedIcon />,
    description: "Only One Item With a Radio Button",
  },
  {
    id: "4",
    title: "Multiple",
    icon: <CheckBoxIcon />,
    description: "Multiple Options Using Checkbox",
  },
  {
    id: "5",
    title: "Date",
    icon: <CalendarMonthIcon />,
    description: "Select Date Fro DatePicker",
  },
  {
    id: "6",
    title: "Upload",
    icon: <CloudUploadIcon />,
    description: "Send Files Via Documents and Media",
  },
  {
    id: "7",
    title: "Checkbox",
    icon: <CheckBoxIcon />,
    description: "Single Option Using Checkbox",
  },
  {
    id: "8",
    title: "Dropdown",
    icon: <ArrowDropDownCircleIcon />,
    description: "Add Dropdown List",
  },
];

export const modalInitialState: any = {
  title: false,
  text: false,
  editor: false,
  radio: false,
  multiple: false,
  date: false,
  upload: false,
  checkbox: false,
  dropdown: false,
};

export const componentToMatchMap: any = {
  Typography: "Title",
  RHFTextField: "Text",
  RHFTextEditor: "Editor",
  RHFRadioGroup: "Radio",
  RHFMultiCheckbox: "Multiple",
  RHFDatePicker: "Date",
  RHFDropZone: "Upload",
  RHFCheckbox: "Checkbox",
  RHFAutocomplete: "Dropdown",
};

// Other method of handling
// export const componentToMatchMap: any = {
//   RHFDatePicker: "date",
//   RHFAutocomplete: "dropdown",
//   RHFMultiCheckbox: "multipleSelection",
//   RHFTextField: ["text", "paragraphText"],
//   RHFRadioGroup: "singleSelection",
//   RHFDropZone: "upload",
// };

// const getModalState = (item: any) => {
//   const newModal: any = {
//     ...modalInitialState,
//   };

//   if (item?.component) {
//     const matchTypes = componentToMatchMap[item?.component];
//     if (Array?.isArray(matchTypes)) {
//       if (item?.componentProps?.multiline) {
//         newModal["paragraphText"] = true;
//       } else if (matchTypes?.includes("text")) {
//         newModal["text"] = true;
//       }
//     } else if (matchTypes) {
//       newModal[matchTypes] = true;
//     }
//   } else if (item?.id !== undefined) {
//     const fieldType = fieldsList?.find((field) => field?.id === item?.id);
//     if (fieldType) {
//       newModal[fieldType?.match] = true;
//     }
//   }
//   return newModal;
// };

// Just Open handler
// const getModalState = (draggedItem: any) => {
//   const newModal: any = {
//     ...modalInitialState,
//   };

//   if (draggedItem?.id !== undefined) {
//     if (fieldsList[draggedItem?.id]) {
//       const itemType = fieldsList[draggedItem.id]?.title
//         ?.toLowerCase()
//         ?.replace(/\s/g, "");
//       if (newModal?.hasOwnProperty(itemType)) {
//         newModal[itemType] = true;
//       }
//     }
//   }

//   return newModal;
// };
