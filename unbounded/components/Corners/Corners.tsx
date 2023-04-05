import React from "react";
import "./Corners.css";

export interface CornersProps {
  borderColor: string;
  height: string;
  width: string;
  margin: string;
}

const Corners: React.FunctionComponent<CornersProps> = (props) => {
  const { borderColor, height, width, margin } = props;

  let _style = props || {};

  return (
    <div className="corners">
      <div className="corner top-left" style={_style}></div>
      <div className="corner bottom-right" style={_style}></div>
    </div>
  );
};

export default Corners;
