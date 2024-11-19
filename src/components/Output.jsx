import React, { useState } from 'react'

function OutputComponent(props) {
    const [runState, setRunState] = useState(false);
    function handleClick() {
        setRunState(!runState);
        props.runCodeButton(!runState);
        
    }
  return (
    <div className='col-12'>
      <div><h3>Output</h3></div>
      <div><button type="button" className="btn btn-success my-0 border" onClick={handleClick}>Run Code</button></div>
      <div className={props.darkMode ?' mt-1 rounded-2 border border-2 border-success' : ' mt-1 rounded-2 border border-2 border-dark'} style={{width: '100%', height: '65vh'}}>
            <h6 className='p-3'>{props.output ? props.output: 'Click Run Code to see the Output'}</h6>
      </div>
    </div>
  )
}

export default OutputComponent
