"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SQUARES = 16;

export function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    document.body.style.overflow = "hidden";

    const hide = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1400);

    return () => {
      window.clearTimeout(hide);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return (
    <div
      className={`preloader ${visible ? "" : "preloader-hide"}`}
      aria-hidden={!visible}
      role="status"
    >
      <div className="preloader-squares" aria-label="Loading">
        {Array.from({ length: SQUARES }, (_, i) => (
          <span
            key={i}
            style={{ animationDelay: `${(i % 4) * 0.08 + Math.floor(i / 4) * 0.08}s` }}
          />
        ))}
      </div>
    </div>
  );
}
