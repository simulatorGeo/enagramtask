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
      <div className="panel-bottom">
        <div className="day">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7053 10.4525C14.7053 11.2647 14.4644 12.0587 14.0132 12.734C13.5619 13.4094 12.9206 13.9357 12.1702 14.2465C11.4198 14.5574 10.5941 14.6387 9.7975 14.4802C9.0009 14.3218 8.26918 13.9307 7.69486 13.3563C7.12054 12.782 6.72943 12.0503 6.57097 11.2537C6.41252 10.4571 6.49385 9.6314 6.80466 8.88102C7.11548 8.13063 7.64183 7.48927 8.31716 7.03803C8.99249 6.5868 9.78645 6.34595 10.5987 6.34595C11.6878 6.34595 12.7323 6.77861 13.5025 7.54874C14.2726 8.31888 14.7053 9.36341 14.7053 10.4525Z"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.598 1.41797V3.06089"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.598 17.8438V19.4867"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.20825 4.06226L5.37474 5.22874"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.8219 15.6758L16.9884 16.8423"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.56409 10.4519H3.20701"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9897 10.4519H19.6327"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.20825 16.8423L5.37474 15.6758"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.8219 5.22874L16.9884 4.06226"
              stroke="#E6D131"
              stroke-width="2.10811"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="night">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17699 15.9266C8.29227 16.0052 9.41102 15.8334 10.4513 15.4238C11.4916 15.0141 12.4271 14.3769 13.1892 13.5589C13.239 13.5063 13.2713 13.4396 13.2817 13.368C13.2921 13.2963 13.2801 13.2232 13.2474 13.1586C13.2147 13.094 13.1628 13.0411 13.0989 13.0072C13.035 12.9732 12.9621 12.9598 12.8903 12.9688C11.5071 13.1328 10.1107 12.8009 8.94929 12.032C7.78792 11.2631 6.93698 10.1072 6.54785 8.76981C6.15872 7.43245 6.25665 6.00041 6.82421 4.72847C7.39177 3.45653 8.39216 2.42718 9.64738 1.82355C9.71278 1.79256 9.76702 1.74214 9.80268 1.67917C9.83834 1.6162 9.85369 1.54375 9.84662 1.47173C9.83956 1.39971 9.81042 1.33162 9.76321 1.27678C9.71599 1.22194 9.65299 1.18302 9.58282 1.16533C8.57207 0.904489 7.51806 0.857183 6.48802 1.02643C5.45797 1.19568 4.47452 1.57777 3.60039 2.14833C2.72626 2.71888 1.98065 3.46537 1.41113 4.34018C0.841604 5.21498 0.460676 6.19889 0.292643 7.22913C0.12461 8.25938 0.173162 9.31333 0.435201 10.3238C0.69724 11.3342 1.16701 12.2789 1.81455 13.0977C2.46209 13.9164 3.27317 14.5912 4.19605 15.0789C5.11893 15.5667 6.13336 15.8568 7.1746 15.9306L7.17699 15.9266Z"
              fill="#DBE9FD"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Panel;
