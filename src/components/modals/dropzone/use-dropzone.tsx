import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "@/utils/generate-unique-id";
import {
  validationSchema,
  defaultValues,
  fileTypeMapping,
  fileTypeAcceptOptions,
} from "./dropzone.data";
import { useEffect, useState } from "react";

export default function useDropzone({ setOpen, setForm, form, editId }: any) {
  const [initialValues, setInitialValues] = useState(defaultValues);

  const reverseTransformAccept = (accept: any) => {
    const selectedFileTypes: any = [];

    Object?.keys(accept)?.forEach((mimeType) => {
      Object?.keys(fileTypeMapping)?.forEach((fileType) => {
        if (fileTypeMapping[fileType][mimeType]) {
          selectedFileTypes?.push(
            fileTypeAcceptOptions?.find((option) => option === fileType)
          );
        }
      });
    });

    return selectedFileTypes;
  };

  useEffect(() => {
    if (editId) {
      const itemToEdit = form?.find((item: any) => item?.id === editId);
      if (itemToEdit) {
        const { label, fileType, accept, size, required } =
          itemToEdit?.componentProps;
        setInitialValues({
          name: label,
          placeholder: fileType,
          fileTypeAccept: reverseTransformAccept(accept),
          size,
          required,
        });
      }
    }
  }, [editId, form]);

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const transformAccept = (selectedFileTypes: any) => {
    return selectedFileTypes.reduce((acc: any, fileType: any) => {
      const mimeTypes = fileTypeMapping[fileType];
      if (mimeTypes) {
        Object.keys(mimeTypes).forEach((mimeType) => {
          if (!acc[mimeType]) {
            acc[mimeType] = mimeTypes[mimeType];
          } else {
            acc[mimeType] = [...acc[mimeType], ...mimeTypes[mimeType]];
          }
        });
      }
      return acc;
    }, {});
  };

  const onSubmit = (data: any) => {
    setOpen(false);
    const uniqueId = generateUniqueId();
    const transformedAccept = transformAccept(data?.fileTypeAccept);

    if (editId) {
      setForm((prevForm: any) =>
        prevForm?.map((item: any) =>
          item?.id === editId
            ? {
                ...item,
                componentProps: {
                  name: data?.name?.replace(/\s/g, ""),
                  label: data?.name,
                  required: data?.required,
                  fileType: data?.placeholder,
                  accept: transformedAccept,
                  maxSize: data?.size * 1024 * 1024,
                },
              }
            : item
        )
      );
    } else {
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
            maxSize: data?.size * 1024 * 1024,
          },
          component: "RHFDropZone",
        },
      ]);
    }
  };

  return { methods, handleSubmit, onSubmit };
}
