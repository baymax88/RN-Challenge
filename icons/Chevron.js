import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={21}
      height={13}
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.345 12.385l1.77-1.77-10-10-10 10 1.77 1.77 8.23-8.23 8.23 8.23z"
        fill="#586069"
      />
    </Svg>
  );
};