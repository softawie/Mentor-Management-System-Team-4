import { useState, useEffect } from "react";
import { AL_BASIC_USERNAME, AL_BASIC_PASSWORD } from "../AppConfig";
import { AL } from "src/utils/constants";

export const useIsMobile = (customWidth) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= (customWidth || 768)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return isMobile;
};

export const getBasicAuthToken = (chn) => {
  if (chn === AL) return `${AL_BASIC_USERNAME}:${AL_BASIC_PASSWORD}`;
};
