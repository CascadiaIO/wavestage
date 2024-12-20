/** @format */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get the last Saturday of a given month and year
export function getLastSaturdayOfMonth(year: number, month: number) {
  const d = new Date(year, month + 1, 0); // Last day of the month
  while (d.getDay() !== 6) {
    // 6 is Saturday
    d.setDate(d.getDate() - 1); // Go back one day until it's Saturday
  }

  const dy = d.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Suffix for the day (st, nd, rd, th)
  let suffix = "th";
  if (dy === 1 || dy === 21 || dy === 31) suffix = "st";
  else if (dy === 2 || dy === 22) suffix = "nd";
  else if (dy === 3 || dy === 23) suffix = "rd";

  return `Saturday, ${months[month]} ${dy}${suffix}`;
}
