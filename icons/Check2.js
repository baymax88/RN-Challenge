import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={14}
      height={11}
      viewBox="0 0 14 11"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.75 8.627L1.622 5.5.557 6.558 4.75 10.75l9-9L12.693.692 4.75 8.628z"
      />
    </Svg>
  );
};