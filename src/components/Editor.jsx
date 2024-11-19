import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react';



 function EditorComponent(props) {
  const files = props.files
  const [fileName, setFileName] = useState({
                                              "language": "javascript",
                                              "version": "18.15.0",
                                              "aliases": [
                                                  "node-javascript",
                                                  "node-js",
                                                  "javascript",
                                                  "js"
                                              ],
                                              "runtime": "node"});
  // const editorRef = useRef(null);
  // function handleEditorDidMount(editor, monaco) {
  //   // here is another way to get monaco instance
  //   // you can also store it in `useRef` for further usage
  //   console.log('onMount: the editor instance:', editor);
  //   console.log('onMount: the monaco instance:', monaco);
  //   editorRef.current = editor;
  // }
  props.languageType(fileName)
  // console.log(fileName)

  function handleInputChange(value, event) {
    // console.log(value)
    props.editorInput(value)
  }
  return (
    <>
    <div className=' ps-1'><h3>Language</h3></div>
      <div className="my-1">
        <button type="button" className="btn btn-secondary mx-1" disabled={fileName === 'javascript'} onClick={() => {setFileName((files.filter((file)=> file.language == 'javascript'))[1]);}}>
          Javascript
        </button>
        <button type="button" className="btn btn-secondary mx-1" disabled={fileName === 'python'} onClick={() => setFileName((files.filter((file)=> file.language == 'python'))[0])}>
          Python
        </button>
        <button type="button" className="btn btn-secondary mx-1" disabled={fileName === 'php'} onClick={() => setFileName((files.filter((file)=> file.language == 'php'))[0])}>
          PHP
        </button>
      </div>
    
      <div className='bg-secondary mt-1 border rounded-2' style={{width: '100%', height: '80vh'}}>
        <Editor 
          className=' border border-2 rounded-2'
          height="100%"
          width='100%'
          theme='vs-dark' 
          onMount={handleEditorDidMount}
          onChange={handleInputChange}
          defaultLanguage={fileName.language}
          defaultValue={'// some comments'}
          path={fileName.language}
          />
        </div>
      
    </>
  )
}
export default EditorComponent

