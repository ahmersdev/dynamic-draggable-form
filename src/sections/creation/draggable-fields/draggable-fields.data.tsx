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
    title: "Single Selection",
    icon: <RadioButtonCheckedIcon />,
    description: "Only One Item With a Radio Button",
  },
  {
    id: "4",
    title: "Multiple Selection",
    icon: <CheckBoxIcon />,
    description: "Multiple Options Using Checkbox",
  },
  {
    id: "7",
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
    id: "5",
    title: "Single Checkbox",
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
