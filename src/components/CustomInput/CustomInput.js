import React, { useState } from "react";
import "./styles.css";
import COLORS from "../../config/colors";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import CustomButton from "../CustomButton/CustomButton";
export default function CustomInput({
  Icon,
  value,
  onChange,
  placeholder,
  isSecureEntry,
  onForgetClick,
}) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="customInputBaseContainer">
      <div
        className="customInputIconContainer"
        onClick={() => isSecureEntry && setShowText(!showText)}
      >
        {isSecureEntry ? (
          showText ? (
            <LuEye size={16} color={COLORS.slateColor} />
          ) : (
            <LuEyeClosed size={16} color={COLORS.slateColor} />
          )
        ) : (
          <Icon size={16} color={COLORS.slateColor} />
        )}
      </div>
      <div className="customInputContainer">
        <input
          type={isSecureEntry ? (showText ? "text" : "password") : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {isSecureEntry && (
        <div className="customInputForgetContainer">
          <CustomButton
            title={"I forget"}
            backgroundColor={COLORS.whiteColor}
            onClick={onForgetClick}
          />
        </div>
      )}
    </div>
  );
}
