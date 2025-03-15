"use client";

import { useEffect, useState, useCallback } from "react";
import { themeEffect } from "../lib/theme-effect";
import { SunIcon, MoonIcon } from "lucide-react";

export function ThemeToggle() {
  const [preference, setPreference] = useState<undefined | null | string>(undefined);
  const [currentTheme, setCurrentTheme] = useState<null | string>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringOverride, setIsHoveringOverride] = useState(false);

  const onMediaChange = useCallback(() => {
    const current = themeEffect();
    setCurrentTheme(current);
  }, []);

  useEffect(() => {
    setPreference(localStorage.getItem("theme"));
    const current = themeEffect();
    setCurrentTheme(current);

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", onMediaChange);
    return () => matchMedia.removeEventListener("change", onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key === "theme") setPreference(event.newValue);
    },
    [setPreference]
  );

  useEffect(() => {
    setCurrentTheme(themeEffect());
  }, [preference]);

  useEffect(() => {
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  return (
    <div className="flex justify-end items-start md:items-center md:w-24 absolute top-4 right-0">
      {isHovering && (
        <span
          className={`
            mr-4
            text-[9px]
            text-gray-400
            /* mobile */
            hidden
            md:inline
          `}
        >
          {preference === null ? "System" : preference === "dark" ? "Dark" : "Light"}
        </span>
      )}
      <button
        aria-label="Toggle theme"
        className={`inline-flex ${isHovering && !isHoveringOverride ? "bg-gray-200 dark:bg-[#313131]" : ""} active:bg-gray-300 transition-[background-color] dark:active:bg-[#242424] rounded-sm p-2 
          bg-gray-200
          dark:bg-[#313131]
          theme-system:!bg-inherit
          [&_.sun-icon]:hidden
          dark:[&_.moon-icon]:hidden
          dark:[&_.sun-icon]:inline
        }`}
        onClick={(ev) => {
          ev.preventDefault();
          // prevent the hover state from rendering
          setIsHoveringOverride(true);

          let newPreference: string | null = currentTheme === "dark" ? "light" : "dark";
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

          if (preference !== null && systemTheme === currentTheme) {
            newPreference = null;
            localStorage.removeItem("theme");
          } else {
            localStorage.setItem("theme", newPreference);
          }
          setPreference(newPreference);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsHoveringOverride(false);
        }}
      >
        <span className="sun-icon">
          <SunIcon size={20} />
        </span>
        <span className="moon-icon">
          <MoonIcon size={20} />
        </span>
      </button>
    </div>
  );
}
