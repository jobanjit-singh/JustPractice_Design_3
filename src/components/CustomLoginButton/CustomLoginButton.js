import React from "react";
import "./styles.css";

export default function CustomLoginButton({
  backgroundColor,
  Icon,
  iconColor,
}) {
  return (
    <div className="customLoginButtonBaseContainer">
      <div
        className="customLoginButtonBottomShapeContainer"
        style={{ backgroundColor }}
      ></div>
      <div className="customLoginButtonMiddleShapeContainer">
        <div className="middleShapeBox" />
      </div>
      <div
        className="customLoginButtonTopShapeContainer"
        style={{ backgroundColor }}
      >
        <Icon size={14} color={iconColor} />
      </div>
    </div>
  );
}
