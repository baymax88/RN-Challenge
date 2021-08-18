import React from "react";
import Svg, { Circle } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={10}
        cy={10}
        r={9.25}
        fill="#fff"
        stroke="#F0F1F3"
        strokeWidth={1.5}
      />
    </Svg>
  );
};