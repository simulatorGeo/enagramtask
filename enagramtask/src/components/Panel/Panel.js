import React from "react";
import "./panel.css";
import settingsLogo from "../../resourses/settings-logo.svg";
import fbLogo from "../../resourses/fb-logo.png";
import question from "../../resourses/question.png";
const Panel = () => {
  return (
    <div className="panel-wrapper">
      <div className="panel-top">
        <div className="spellcheker">
          <div className="spellcheker-icon">
            <div className="abc">ABC</div>
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.97244 9.39906C7.35983 9.77262 7.97338 9.7726 8.36075 9.39902L17.6967 0.395501C18.084 0.0220193 18.6973 0.0218942 19.0848 0.395218L19.2944 0.597234C19.7025 0.990441 19.7026 1.64382 19.2947 2.03717L8.36075 12.5806C7.97337 12.9541 7.35985 12.9541 6.97247 12.5806L0.988448 6.81029C0.580629 6.41703 0.58063 5.76385 0.988449 5.3706L1.19747 5.16904C1.58485 4.7955 2.19837 4.7955 2.58575 5.16904L6.97244 9.39906Z"
                fill="#2D62ED"
              />
            </svg>
          </div>
          <div className="spellcheker-text">Spellcheker</div>
        </div>
        <div className="text-to-speech">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H6V15H4V5ZM0 8H2V12H0V8ZM8 0H10V18H8V0ZM12 2H14V20H12V2ZM16 5H18V15H16V5ZM20 8H22V12H20V8Z"
              fill="white"
            />
          </svg>
          Text to speech
        </div>
        <div className="speech-to-text">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 20V18.93C4.33387 18.6891 2.81031 17.856 1.7084 16.5833C0.606482 15.3106 -1.56117e-05 13.6835 3.01398e-10 12V7C-1.33965e-08 6.08075 0.18106 5.1705 0.532843 4.32122C0.884626 3.47194 1.40024 2.70026 2.05025 2.05025C2.70026 1.40024 3.47194 0.884626 4.32122 0.532843C5.17049 0.18106 6.08075 0 7 0C7.91925 0 8.8295 0.18106 9.67878 0.532843C10.5281 0.884626 11.2997 1.40024 11.9497 2.05025C12.5998 2.70026 13.1154 3.47194 13.4672 4.32122C13.8189 5.1705 14 6.08075 14 7V12C14 13.6835 13.3935 15.3106 12.2916 16.5833C11.1897 17.856 9.66613 18.6891 8 18.93V20H12V22H2V20H6ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7V12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17C8.32608 17 9.59785 16.4732 10.5355 15.5355C11.4732 14.5979 12 13.3261 12 12V7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2ZM7 8C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8ZM7 10C6.20435 10 5.44129 9.68393 4.87868 9.12132C4.31607 8.55871 4 7.79565 4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4C7.79565 4 8.55871 4.31607 9.12132 4.87868C9.68393 5.44129 10 6.20435 10 7C10 7.79565 9.68393 8.55871 9.12132 9.12132C8.55871 9.68393 7.79565 10 7 10Z"
              fill="white"
            />
          </svg>
          Speech to text
        </div>
      </div>
      <div className="panel-middle">
        <div className="line">
          <div className="panel-item">
            <img src={settingsLogo} />
            <span>Settings</span>
          </div>
          <div className="panel-item">
            <img src={fbLogo} />
            <span>Facebook</span>
          </div>
          <div className="panel-item">
            <img src={question} />
            <span>Contact support</span>
          </div>
        </div>
      </div>
      <div className="panel-bottom"></div>
    </div>
  );
};
export default Panel;
