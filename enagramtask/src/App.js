import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Panel from "./components/Panel/Panel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import gbr from "./resourses/gbr.svg";
function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(undefined);
  const [path, setPath] = useState("");

  let txt = `სლოგანს ეხმიანება „ავერსის“ ლოგოტიპიც - წითელი გული, რომელზეც გამოსახულია თეთრი მტრედი ზეთისხილის რტოთი.
  წითლისა და თეთრის სიმბოლიკას ისტორიული ფესვები აქვს. ამ ფერებს ჯერ კიდევ შუა საუკუნეებში, ჯვაროსნული ომების ეპოქაში, იყენებდნენ ტამპლიერებისა და ჰოსპიტალიერების რაინდული ორდენები, რომლებიც ზრუნავდნენ ავადმყოფებზე, უსახლკაროებსა და ობლებზე, იცავდნენ წმინდა ადგილების მოსალოცად მიმავალ მორწმუნეთა უსაფრთხოებას. წითელი ჯვრის საერთაშორისო ორგანიზაცია მსოფლიომ სწორედ თეთრ ფონზე გამოსახული წითელი ჯვრით გაიცნო. დროთა განმავლობაში ამ ემბლემის შინაარსი გაფართოვდა და განსაცდელში ჩავარდნილთა უანგარო დახმარების სიმბოლოდ იქცა.
  უძველეს კულტურებში წითელი სიბრძნესა და სასიცოცხლო ენერგიას განასახიერებდა, თეთრი კი სიწმინდესა და კეთილშობილებას.
  გულიც, როგორც ადამიანის მთავარი ორგანო, სიცოცხლესა და ჯანმრთელობას გამოხატავს. მტრედი ჯერ კიდევ ბიბლიური ეპოქიდან მიიჩნევა მშვიდობის სიმბოლოდ, ხოლო ზეთისხილის რტო, რომელიც ასევე ბიბლიური ეპოქიდან იღებს სათავეს, სიცოცხლისა და ღმერთთან შერიგების გამომხატველია.
  ყველა ამ მნიშვნელობას სრულყოფილად იტევს „ავერსის“ ემბლემა - მასაც ხომ, როგორც ბიბლიურ მტრედს, თავისი საქმიანობით სიმშვიდე და ჯანმრთელობა მოაქვს ადამიანებისთვის.`;
  const handleClick = () => {
    start(txt);
  };
  const start = (txt) => {
    let max = txt.length / 150;
    let inputText = txt;
    let sentence = "";
    let index = 0;
    if (inputText.length <= 230) {
      setText(inputText);
    } else if (inputText.length > 230) {
      for (let i = 0; i < max; i++) {
        let secondPart = inputText.slice(150, 230);
        let indexOfDot = secondPart.indexOf(".");
        let indexOfComma = secondPart.indexOf(",");
        let indexOfExcl = secondPart.indexOf("!");
        let indexOfSpace = secondPart.indexOf(" ");
        if (indexOfDot > 0) {
          index = indexOfDot + 151;
        } else if (indexOfDot <= 0 && indexOfExcl > 0) {
          index = indexOfExcl + 151;
        } else if (indexOfDot <= 0 && indexOfExcl <= 0 && indexOfComma > 0) {
          index = indexOfComma + 151;
        } else if (
          indexOfDot <= 0 &&
          indexOfExcl <= 0 &&
          indexOfComma <= 0 &&
          indexOfSpace > 0
        ) {
          index = indexOfSpace + 151;
        } else {
          index = 230;
        }
        sentence = inputText.slice(0, index);
        if (sentence.length > 0) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append(
            "Cookie",
            "ASP.NET_SessionId=jnqg5cgfaz5gvioxkm4fn4ou; __RequestVerificationToken=PvWtOiWyxHLopK8xepEUSul65l-hkPmChfvcAOqfGpAHgfAwwvxoHZsMu6P-Wk3gpFNTjUpHozKY2Ose-H6ve5o8YiU1"
          );

          var raw = JSON.stringify({
            Language: "ka",
            Speed: 1000,
            Text: sentence,
            async: true,
            Voice: 0,
            IterationCount: 2,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch("https://enagramm.com/Tools/SythesizeTextDAL", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(typeof result);
              setPath((prevState) => [...prevState, result["AudioFilePath"]]);
            })
            .catch((error) => console.log("error", error));
          inputText = inputText.slice(index, inputText.length);
        }
      }
    }
  };
  console.log(path, "paths");
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="panel-container">
          <Panel />
        </div>
        <div className="updatable-content-container">
          <div className="text-editor-header">
            <div className="header-check">
              <svg
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.29284 8.46486C5.68338 8.8554 6.31658 8.85538 6.70709 8.46482L14.4851 0.685937C14.8756 0.295475 15.5087 0.29547 15.8993 0.685773C16.29 1.07626 16.2903 1.70974 15.8996 2.10036L6.70709 11.2929C6.31657 11.6834 5.6834 11.6834 5.29288 11.2929L0.342986 6.343C-0.0474792 5.95254 -0.0474789 5.31947 0.342987 4.929C0.733452 4.53854 1.36652 4.53854 1.75699 4.929L5.29284 8.46486Z"
                  fill="white"
                />
              </svg>
              <div className="header-check-button" onClick={handleClick}>
                Check
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  right: "30px",
                  top: "200px",
                }}
              >
                {path &&
                  path.map((item) => (
                    <div
                      style={{
                        color: "black",
                        display: "block",
                      }}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </div>
            <div className="header-copy">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.01 6H7ZM5.003 8L5 20H15V8H5.003ZM9 6H17V16H19V4H9V6Z"
                  fill="#2D62ED"
                />
              </svg>
              Copy
            </div>
            <div className="header-delete">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                  fill="#606060"
                />
              </svg>
              Delete
            </div>
            <div className="header-separator">
              <svg
                width="1"
                height="36"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.666667V23.3333"
                  stroke="#CCCACA"
                  stroke-linecap="square"
                />
              </svg>
            </div>

            <div className="header-language">
              <img src={gbr} />
              Language
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 15L7.75708 10.757L9.17208 9.34302L12.0001 12.172L14.8281 9.34302L16.2431 10.757L12.0001 15Z" fill="#51555B"/>
</svg>

            </div>
          </div>
          <div className="editor-menu">
            <div className="editor-border"></div>
          </div>
          <ReactQuill
            className="quill-wrapper"
            theme="snow"
            value={value}
            onChange={setValue}
          ></ReactQuill>
        </div>
      </div>
    </div>
  );
}

export default App;
