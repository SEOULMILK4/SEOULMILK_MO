import { useEffect } from "react";

const DeviceRedirect = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

    const currentUrl = window.location.href;

    if (isMobile && !currentUrl.includes("m.milksajo.store")) {
      window.location.href = "https://m.milksajo.store";
    } else if (!isMobile && !currentUrl.includes("milksajo.store")) {
      window.location.href = "https://milksajo.store"; 
    }
  }, []);

  return null;
};

export default DeviceRedirect;
