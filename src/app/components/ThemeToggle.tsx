import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const themes = [
  { value: "system", icon: Monitor, label: "Dispositivo" },
  { value: "light", icon: Sun, label: "Claro" },
  { value: "dark", icon: Moon, label: "Oscuro" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const cycleTheme = () => {
    const idx = themes.findIndex((t) => t.value === (theme ?? "system"));
    const next = themes[(idx + 1) % themes.length];
    setTheme(next.value);
  };

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-accent transition-colors" aria-label="Cambiar tema">
        <Monitor size={20} className="text-muted-foreground" />
      </button>
    );
  }

  const current = themes.find((t) => t.value === (theme ?? "system")) ?? themes[0];
  const Icon = current.icon;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg hover:bg-accent transition-colors relative group"
      aria-label="Cambiar tema"
    >
      <Icon size={20} className="text-muted-foreground" />
      <span className="absolute -bottom-8 right-0 text-xs bg-popover text-popover-foreground px-2 py-1 rounded border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {current.label}
      </span>
    </button>
  );
}
