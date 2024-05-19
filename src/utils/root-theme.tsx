import Cookies from "js-cookie";
import { Settings } from "@/types";
import { COOKIES_KEYS } from "@/constants/strings";

export const resetSettings = (): void => {
  try {
    Cookies.remove(COOKIES_KEYS.SETTINGS_STORAGE_KEY);
    // window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

export const updateSettings = (settings: Settings): void => {
  try {
    Cookies.set(COOKIES_KEYS.SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    // window.location.reload();
  } catch (err) {
    console.error(err);
  }
};
