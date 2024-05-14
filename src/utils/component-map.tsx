import {
  RHFCheckbox,
  RHFDatePicker,
  RHFDropZone,
  RHFMultiCheckbox,
  RHFRadioGroup,
  RHFTextEditor,
  RHFTextField,
} from "@/components/react-hook-form";
import { Typography } from "@mui/material";

export const componentMap: any = {
  Typography: Typography,
  RHFTextField: RHFTextField,
  RHFTextEditor: RHFTextEditor,
  RHFRadioGroup: RHFRadioGroup,
  RHFMultiCheckbox: RHFMultiCheckbox,
  RHFDatePicker: RHFDatePicker,
  RHFDropZone: RHFDropZone,
  RHFCheckbox: RHFCheckbox,
};
