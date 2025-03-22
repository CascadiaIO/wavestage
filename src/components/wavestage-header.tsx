/** @format */

import React from "react";
import GradientText from "./reactbits/textanimations/GradientText/GradientText";

export default function WavestageHeader() {
  return (
    // <div className="wavestage-header text-5xl md:text-6xl lg:text-8xl drop-shadow-[0px_0px_20px_rgba(164,14,76,1)]">
    //   WAVESTAGE
    // </div>
    <div className="wavestage-header  text-5xl md:text-6xl lg:text-8xl">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={4}
        showBorder={false}
        className="custom-class">
        WAVESTAGE
      </GradientText>
    </div>
  );
}
