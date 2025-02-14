import "./App.css";
import ASSETS from "./assets";
import CustomButton from "./components/CustomButton/CustomButton";
import COLORS from "./config/colors";
import { FaFacebook } from "react-icons/fa";

function App() {
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
          </div>
          <div className="discoverBaseContainer"></div>
        </div>
        <div className="detailsBaseContainer"></div>
      </div>
    </div>
  );
}

export default App;
