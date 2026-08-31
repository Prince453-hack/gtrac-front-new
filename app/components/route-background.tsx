"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const isGradientRoute = pathname === "/" || pathname === "/about-us";
    if (isGradientRoute) {
      document.body.classList.add("gradient-bg");
    } else {
      document.body.classList.remove("gradient-bg");
    }
  }, [pathname]);

  return null;
}
