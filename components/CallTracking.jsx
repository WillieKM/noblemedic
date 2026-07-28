"use client";

import { useEffect } from "react";

export default function CallTracking() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a[href^="tel:"]');
      if (link && typeof window.gtag === "function") {
        window.gtag("event", "call_click", { link_url: link.href });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
