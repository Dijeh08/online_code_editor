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
  
  function handleSelectButton(event) {
    console.log(event.target.value)
    setFileName((files.filter((file)=> file.language == event.target.value))[0])
  }
  function handleInputChange(value, event) {
    // console.log(value)
    props.editorInput(value)
  }
  return (
    <>
    <div className=' ps-1'><h3>Language</h3></div>
      <div className='w-10 my-1'>
        <select className="form-select" aria-label="Default select example" onChange={handleSelectButton}>
          <option value='javascript' selected >JavaScript</option>
          <option value="python">Python</option>
          <option value="php">PHP</option>
          <option value="typescript">Typescript</option>
        </select>
      </div>
      
    
      <div className=' mt-1 border rounded-2' style={{width: '100%', height: '65vh'}}>
        <Editor 
          className={props.darkMode? ' border border-2 rounded-2 border-success': 'border border-2 rounded-2 border-dark'}
          height="100%"
          width='100%'
          theme={props.darkMode? 'vs-dark' : 'vs-light'} 
          // onMount={handleEditorDidMount}
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

