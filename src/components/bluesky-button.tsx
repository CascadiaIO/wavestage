/** @format */

"use client";

import { FaBluesky } from "react-icons/fa6";

export function BSkyButton() {
  return (
    <div
      className="
      flex
      overflow-hidden
      items-center
      w-40
      rounded
      border-2
      border-[#0085FF]
      hover:bg-transparent
    hover:text-[#0085FF]
      cursor-pointer
      bg-[#0085FF]
      text-[#02010A]
      "
      onClick={() =>
        window.open("https://bsky.app/profile/wavestage.bsky.social", "_blank")
      }>
      <div className="p-2 bg-background">
        <FaBluesky size={32} className="text-[#0085FF]" />
      </div>
      <div
        className="
          rounded
          font-semibold
          flex-grow
          px-2
          text-center
          text-xl
      ">
        Talk
      </div>
    </div>
  );
}
