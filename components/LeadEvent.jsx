"use client";

import { useEffect } from "react";

export default function LeadEvent() {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead");
    }
  }, []);

  return null;
}
