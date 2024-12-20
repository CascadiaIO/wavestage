/** @format */

import { getLastSaturdayOfMonth } from "@/lib/utils";

export default function DateNextStream() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Get current month (0-11)

  // Get the last Saturday of the current month
  const lastSaturday = getLastSaturdayOfMonth(year, month);

  return (
    <div className="text-xl md:text-2xl mb-6">
      {lastSaturday} <br />
      7:00 PM EST
    </div>
  );
}
