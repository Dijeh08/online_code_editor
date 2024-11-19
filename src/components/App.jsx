import { useEffect, useState } from 'react'
import EditorComponent from './Editor.jsx'
import OutputComponent from './Output.jsx';
import {Files} from './staticData.js'
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  const GETURL = 'https://emkc.org/api/v2/piston/runtimes';
  const POSTURL = 'https://emkc.org/api/v2/piston/execute';

  const [fileName, setFileName] = useState(null)
  const [runState, setRunState] = useState(false);
  const [inputEditor, setInputEditor] = useState(null)
  const [result, setReuslt] = useState(null)
  const [darkMode, setDarkMode] = useState(true)
  const htmlElement = document.querySelector('html');
                        htmlElement.setAttribute('data-bs-theme', 
                        darkMode ? 'dark' : 'light');
  
  async function handleGetCall() {
    try {
      // Send a POST request
      const response = await axios({
        method: 'get',
        url: GETURL,});
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    // handleGetCall();
  }, []);

  function handleLanguageType(data) {
    setFileName(data)
    console.log(data.language)
  }

  function handleEditorInput(value) {
    setInputEditor(value)
  }
  function handleRunCodeButton(state) {
    console.log(state);
    setRunState(state)
  }

  async function handlePostAPI(params) {
    try {
      const response = await axios({
        method: 'POST',
        url: POSTURL,
        data: {
          language: fileName.language,
          version: fileName.version,
        files: [{content: `${inputEditor}`}]
        }
      })
      const output = response.data.run.output;
      setReuslt(output)
      console.log(output)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    handlePostAPI();
  }, [runState]);
 
  function handleThemeMode(params) {
    setDarkMode(params)
  }

  return (
    <>
      <div >
          <Header
            darkMode={handleThemeMode}/>
          <div className='container-fluid mt-2'>
            <div className='row g-0'>
              <div className='col-6'>
                <div className='p-1'>
                  <EditorComponent 
                    files={Files}
                    languageType={handleLanguageType}
                    editorInput={handleEditorInput}
                    darkMode={darkMode}/>
                </div>
                
              </div>
              <div className='col-6'>
                <div className='p-1'>
                  <OutputComponent
                    output={result}
                    runCodeButton={handleRunCodeButton}
                    darkMode={darkMode}/>
                </div>
                
              </div>
            </div>
            
            
          </div>
          <Footer/>
          </div>
    </>
  )
}

export default App
