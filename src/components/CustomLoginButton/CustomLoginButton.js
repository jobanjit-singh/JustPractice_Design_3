import React from "react";
import "./styles.css";

export default function CustomLoginButton({
  backgroundColor,
  Icon,
  iconColor,
  onClick,
}) {
  return (
    <div className="customLoginButtonBaseContainer" onClick={onClick}>
      <div
        className="customLoginButtonBottomShapeContainer"
        style={{ backgroundColor }}
      ></div>

      <div
        className="customLoginButtonTopShapeContainer"
        style={{ backgroundColor }}
      >
        <Icon size={14} color={iconColor} />
      </div>
      <div className="customLoginButtonMiddleShapeContainer">
        <div
          className="middleShapeBox"
          id="middleShapeOne"
          style={{ background: backgroundColor }}
        ></div>
        <div
          className="middleShapeBox"
          id="middleShapeTwo"
          style={{ background: backgroundColor }}
        ></div>
      </div>
    </div>
  );
}
