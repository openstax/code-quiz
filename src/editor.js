import React, { createRef, Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

export class Editor extends Component {
    editor = createRef()

    editorDidMount = (editor, monaco) => {
        if (!this.props.readonly) {
            editor.focus();
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.props.readonly && prevProps.readonly)  {
            this.editor.current.editor.focus()
        }
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
              readonly={this.props.readonly}
              defaultValue={this.props.defaultValue}
              options={options}
              editorDidMount={this.editorDidMount}
            />
        );
    }
}
