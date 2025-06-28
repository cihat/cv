export const themeEffect = function () {
  // Use system preference only
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#1c1c1c");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#fcfcfc");
    return "light";
  }
};
