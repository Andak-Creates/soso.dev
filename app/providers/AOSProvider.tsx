"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 80,
    });
  }, []);

  return <>{children}</>;
}
