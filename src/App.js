import { useEffect, useState } from "react";
import "./App.css";
import ASSETS from "./assets";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomInput from "./components/CustomInput/CustomInput";
import COLORS from "./config/colors";
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="baseContainer"
      style={{ backgroundImage: `url(${ASSETS.backImage})` }}
    >
      <div className="overlayContainer" />
      <div className="contentBaseContainer">
        <div className="loginFormBaseContainer">
          <div className="loginFormContainer">
            <div className="loginFormHeaderContainer">
              <p id="headerName">Lorem Lab</p>
              <p id="headerSignUpButton">Sign Up</p>
            </div>
            <div className="spacerLarge" />
            <div className="loginFormTitleContainer">
              <p id="loginFormTitle">Log In</p>
              <div id="loginFormTitleButtonContainer">
                <CustomButton
                  title={"Facebook"}
                  border={`1px solid ${COLORS.slateColor}`}
                  withIcon={true}
                  Icon={FaFacebook}
                  onClick={() => alert("Facebook Button")}
                />
              </div>
            </div>
            <div className="spacerMedium" />
            <div className="loginFormInputContainer">
              <CustomInput
                Icon={MdAlternateEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"e-mail address"}
              />
              <CustomInput
                isSecureEntry={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"password"}
                onForgetClick={() => alert("Forget Password Click")}
              />
            </div>
          </div>
          <div className="discoverBaseContainer"></div>
        </div>
        <div className="detailsBaseContainer"></div>
      </div>
    </div>
  );
}

export default App;
