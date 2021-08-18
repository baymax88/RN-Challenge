import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.245 5.981a.733.733 0 00-.01-.142.733.733 0 00-.087-.112 3.004 3.004 0 00-.336-.312 11.018 11.018 0 00-1.236-.843c-1.026-.62-2.368-1.3-3.751-1.916-1.383-.616-2.787-1.158-3.934-1.506A11.025 11.025 0 006.438.796a3.004 3.004 0 00-.457-.04.737.737 0 00-.141.01.737.737 0 00-.113.087 3.003 3.003 0 00-.312.336c-.246.301-.532.721-.843 1.235-.62 1.026-1.3 2.368-1.916 3.751C2.04 7.56 1.498 8.962 1.151 10.11a11.023 11.023 0 00-.354 1.453c-.03.193-.042.344-.041.457 0 .087.008.13.01.142.006.01.03.047.087.112a3 3 0 00.336.312c.302.247.721.533 1.236.843 1.026.62 2.367 1.3 3.75 1.916 1.384.616 2.788 1.158 3.935 1.506.574.174 1.068.295 1.453.354.192.03.344.042.456.041.088 0 .13-.009.142-.011a.744.744 0 00.113-.087 3.01 3.01 0 00.312-.336c.246-.301.532-.721.843-1.235.62-1.026 1.3-2.368 1.916-3.751.615-1.384 1.157-2.787 1.505-3.934.175-.575.295-1.068.354-1.453.03-.193.042-.344.041-.457z"
        stroke="#2F48AD"
        strokeWidth={1.455}
      />
    </Svg>
  );
};