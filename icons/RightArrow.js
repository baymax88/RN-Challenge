import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={10}
      height={15}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.673 13.672L2 15l7.5-7.5L2 0 .673 1.327 6.845 7.5.673 13.672z"
        fill="#2F48AD"
      />
    </Svg>
  );
};