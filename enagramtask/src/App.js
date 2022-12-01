import Header from "./components/header/Header";
import Panel from "./components/Panel/Panel";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './styles.css'
import { useState } from "react";
function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="panel-container">
          <Panel />          
        </div>
        <div className="updatable-content-container">
          <div className="editor-menu">
            <div className="editor-border"></div>
          </div>
          <ReactQuill className="quill-wrapper" theme="snow" value={value} onChange={setValue}></ReactQuill>
        </div>
      </div>
    </div>
  );
}

export default App;
