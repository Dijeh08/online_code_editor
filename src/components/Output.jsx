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
      <div className='bg-secondary mt-1 border rounded-2' style={{width: '100%', height: '80vh'}}>
            <h6>{props.output ? props.output: 'Click Run Code to see the Output'}</h6>
      </div>
    </div>
  )
}

export default OutputComponent
