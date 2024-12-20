/** @format */

"use client";

import { FaTwitch } from "react-icons/fa";

export function TwitchButton() {
  return (
    <div
      className="
      flex
      overflow-hidden
      items-center
      w-40
      rounded
      border-2
      border-purple-500
      hover:bg-transparent
    hover:text-purple-500
      cursor-pointer
      bg-purple-400
      text-[#02010A]
      "
      onClick={() => window.open("https://twitch.tv/wavestage", "_blank")}>
      <div className="p-2 bg-background">
        <FaTwitch size={32} className="text-purple-500" />
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
        Watch
      </div>
    </div>
  );
}
