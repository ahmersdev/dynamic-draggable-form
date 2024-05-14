import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import {
  validationSchema,
  defaultValues,
  transformAccept,
} from "./dropzone.data";

export default function useDropzone({ setOpen, setForm, form }: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setOpen(false);
    const uniqueId = generateUniqueId();
    const transformedAccept = transformAccept(data?.fileTypeAccept);

    setForm([
      ...form,
      {
        id: uniqueId,
        componentProps: {
          name: data?.name?.replace(/\s/g, ""),
          label: data?.name,
          required: data?.required,
          fileType: data?.fileTypeText,
          accept: transformedAccept,
        },
        component: "RHFDropZone",
      },
    ]);
  };

  return { methods, handleSubmit, onSubmit };
}
