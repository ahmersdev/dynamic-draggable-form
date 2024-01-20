import { ROUTES } from "@/constants/routes";

export const headerTitle = (pathName: any) => {
  let title;

  switch (pathName) {
    case ROUTES.INTRO:
      title = "Intro";
      break;

    case ROUTES.CREATION:
      title = "Creation";
      break;

    case ROUTES.SUBMISSION:
      title = "Submission";
      break;

    case ROUTES.PREVIEW:
      title = "Preview";
      break;

    default:
      title = "Unknown Page";
      break;
  }
  return title;
};
