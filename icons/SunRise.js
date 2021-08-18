import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 9.438a3.75 3.75 0 00-7.5 0" fill="#FFC453" />
      <Path
        d="M13 9.438a3.75 3.75 0 00-7.5 0M5.875 9.438h6.75M9.25 1v1.688M3.415 3.603L4.48 4.668M1 9.438h1.125M16 9.438h1.125M14.02 4.668l1.065-1.065M17.5 12.813H1"
        stroke="#FFC453"
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};