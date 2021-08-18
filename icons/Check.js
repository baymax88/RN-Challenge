import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

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
      <Circle cx={10} cy={10} r={10} fill="#EBEFFE" />
      <Path
        d="M8 12.78L5.22 10l-.947.94L8 14.667l8-8-.94-.94L8 12.78z"
        fill="#5C7CFA"
      />
    </Svg>
  );
};