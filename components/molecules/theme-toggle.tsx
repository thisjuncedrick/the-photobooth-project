"use client";

import { IconDeviceDesktop, IconMoon, IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "text-muted-foreground flex items-center rounded-full border p-1",
          "[&_button]:rounded-full [&_button]:p-1 [&_button>svg]:size-4",
        )}
      >
        <button type='button' aria-label='Light theme' disabled>
          <IconSun aria-hidden='true' />
        </button>
        <button type='button' aria-label='System theme' disabled>
          <IconDeviceDesktop aria-hidden='true' />
        </button>
        <button type='button' aria-label='Dark theme' disabled>
          <IconMoonStars aria-hidden='true' />
        </button>
      </div>
    );
  }

  return (
    <div
      role='group'
      aria-label='Theme selection'
      className={cn(
        "text-muted-foreground flex items-center rounded-full border p-1 transition-colors",
        "[&_button]:data-[active=true]:bg-secondary [&_button]:data-[active=true]:text-secondary-foreground",
        "[&_button]:hover:text-secondary-foreground [&_button]:rounded-full [&_button]:p-1 [&_button]:transition-colors",
        "[&_button>svg]:size-4",
      )}
    >
      <button
        type='button'
        onClick={() => setTheme("light")}
        data-active={theme === "light"}
        aria-label='Light theme'
        aria-pressed={theme === "light"}
      >
        <IconSun aria-hidden='true' />
      </button>

      <button
        type='button'
        onClick={() => setTheme("system")}
        data-active={theme === "system"}
        aria-label='System theme'
        aria-pressed={theme === "system"}
      >
        <IconDeviceDesktop aria-hidden='true' />
      </button>

      <button
        type='button'
        onClick={() => setTheme("dark")}
        data-active={theme === "dark"}
        aria-label='Dark theme'
        aria-pressed={theme === "dark"}
      >
        <IconMoonStars aria-hidden='true' />
      </button>
    </div>
  );
});

const ThemeToggleDev = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onThemeSwitch = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button
        type='button'
        className='bg-secondary fixed bottom-3 left-3 rounded-full border p-1'
        disabled
      >
        <IconSun aria-hidden='true' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='bg-secondary fixed bottom-3 left-3 z-999 rounded-full border p-1'
      onClick={onThemeSwitch}
    >
      <IconSun className='hidden dark:inline-flex' aria-hidden='true' />
      <IconMoon className='dark:hidden' />
    </button>
  );
};
export { ThemeToggle, ThemeToggleDev };
