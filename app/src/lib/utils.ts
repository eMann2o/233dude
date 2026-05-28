import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Maps semantic colors to text color classes
export function getTextColor(color: string): string {
  switch (color) {
    case "blue-bell": return "text-blue-bell";
    case "dusty-mauve": return "text-dusty-mauve";
    case "lavender": return "text-lavender";
    case "iron-grey": return "text-iron-grey";
    default: return "text-blue-bell";
  }
}

// Maps semantic colors to background classes with opacity variants
export function getBgColor(color: string, opacity: "5" | "10" | "20" | "30" | "40" | "100" = "100"): string {
  if (opacity === "100") {
    switch (color) {
      case "blue-bell": return "bg-blue-bell";
      case "dusty-mauve": return "bg-dusty-mauve";
      case "lavender": return "bg-lavender";
      case "iron-grey": return "bg-iron-grey";
      default: return "bg-blue-bell";
    }
  }
  
  const map: Record<string, Record<string, string>> = {
    "blue-bell": { "5": "bg-blue-bell/5", "10": "bg-blue-bell/10", "20": "bg-blue-bell/20", "30": "bg-blue-bell/30", "40": "bg-blue-bell/40" },
    "dusty-mauve": { "5": "bg-dusty-mauve/5", "10": "bg-dusty-mauve/10", "20": "bg-dusty-mauve/20", "30": "bg-dusty-mauve/30", "40": "bg-dusty-mauve/40" },
    "lavender": { "5": "bg-lavender/5", "10": "bg-lavender/10", "20": "bg-lavender/20", "30": "bg-lavender/30", "40": "bg-lavender/40" },
    "iron-grey": { "5": "bg-iron-grey/5", "10": "bg-iron-grey/10", "20": "bg-iron-grey/20", "30": "bg-iron-grey/30", "40": "bg-iron-grey/40" },
  };

  return map[color]?.[opacity] || `bg-blue-bell/${opacity}`;
}