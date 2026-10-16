import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));

      let attempts = 0;
      let timeoutId;

      const scrollToTarget = () => {
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: "instant",
            block: "start",
          });
          return;
        }

        if (attempts < 10) {
          attempts += 1;
          timeoutId = window.setTimeout(scrollToTarget, 50);
        }
      };

      scrollToTarget();

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}