import React, { useState, useRef, useCallback } from 'react'
import './App.css';
import {Editor} from './editor'
import { runCode } from './run';

function App() {
  const [code, setCode] = useState('print("Hello World!")')
  
  const editorRef = useRef()

  const run = useCallback(() => {
    runCode(editorRef.current.value)
  }, [])
  
  return (
    <div className="App">
      <Editor ref={editorRef} onChange={setCode} defaultValue={code} />
      <div className="right">
        <div>
          <button onClick={run}>Execute</button>
        </div>
        <div id="output"></div>
      </div>
    </div>
  );
}

export default App;
