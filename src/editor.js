import React, { createRef, Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

export class Editor extends Component {
  editor = createRef()

  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }

  editorDidMount = (editor, monaco) => {
    editor.focus();
  }

  get value() {
    return this.editor.current.editor.getValue()
  }

  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        ref={this.editor}
        width="400"
        height="400"
        language="python"
        theme="vs-dark"
        defaultValue={this.props.defaultValue}
        options={options}

        editorDidMount={this.editorDidMount}
      />
    );
  }
}
