import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";

export const mainRoutesArray = [
  { id: 1, icon: HomeRoundedIcon, label: "Intro", href: "/" },
  { id: 2, icon: BorderColorRoundedIcon, label: "Creation", href: "/creation" },
  { id: 3, icon: PublishRoundedIcon, label: "Submission", href: "/submission" },
  { id: 4, icon: RemoveRedEyeRoundedIcon, label: "Preview", href: "/preview" },
];

export const mainStyles = (href: any, pathName: any, theme: any) => {
  return {
    background: `${
      pathName === href ? theme?.palette?.gradients?.primary : null
    }`,
    color: `${
      pathName === href
        ? theme?.palette?.grey?.[100]
        : theme?.palette?.secondary?.[400]
    }`,
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "6px 200px 200px 6px",
    "&:hover": {
      background: `${
        pathName === href
          ? theme?.palette?.gradients?.primary
          : theme?.palette?.gradients?.secondary
      }`,
    },
  };
};
