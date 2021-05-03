import { useEffect } from "react";

export const useBackground = (bool) => {
  return useEffect(() => {
    if (bool) {
      document.body.className = "body_animation";
    } else {
      document.body.className = "";
    }
  }, [bool]);
};
