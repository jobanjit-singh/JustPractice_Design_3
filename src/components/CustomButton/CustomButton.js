import React from "react";
import "./styles.css";
import COLORS from "../../config/colors";

export default function CustomButton({
  title,
  backgroundColor = "transparent",
  color = COLORS.slateColor,
  border = "0px",
  withIcon = false,
  Icon,
  onClick,
}) {
  return (
    <div
      className="customButtonBaseContainer"
      style={{ backgroundColor, color, border }}
      onClick={onClick}
    >
      {withIcon && (
        <div className="customButtonIconContainer">
          <Icon size={16} color={color} />
        </div>
      )}
      {title}
    </div>
  );
}
