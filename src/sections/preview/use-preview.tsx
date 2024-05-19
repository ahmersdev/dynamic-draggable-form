import { COOKIES_KEYS, PREVIEW_FORM } from "@/constants/strings";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Box, Link } from "@mui/material";

export default function usePreview() {
  const [preview, setPreview] = useState<any>();

  useEffect(() => {
    const storedData = Cookies.get(COOKIES_KEYS.FORM_SUBMISSION_STORAGE_KEY);
    if (storedData) {
      setPreview(JSON.parse(storedData));
    }
  }, []);

  const renderValue = (value: any) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    } else if (typeof value === PREVIEW_FORM.OBJECT && value !== null) {
      if (value.path) {
        const imagePath = value.path.startsWith("/")
          ? value.path
          : `/${value.path}`;
        return (
          <>{imagePath}</>
          // <Image
          //   src={imagePath}
          //   alt="Preview"
          //   width={500}
          //   height={300}
          //   layout="responsive"
          //   objectFit="contain"
          // />
        );
      } else {
        return JSON.stringify(value);
      }
    } else if (typeof value === PREVIEW_FORM.BOOLEAN) {
      return value ? "True" : "False";
    } else if (
      typeof value === PREVIEW_FORM.STRING &&
      value.startsWith("http")
    ) {
      return (
        <Link href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </Link>
      );
    } else if (typeof value === PREVIEW_FORM.STRING && value.startsWith("<")) {
      return <Box dangerouslySetInnerHTML={{ __html: value }} />;
    } else {
      return value;
    }
  };

  return { preview, renderValue };
}
