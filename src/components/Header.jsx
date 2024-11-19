import React, {useState} from 'react'
import './Header.jsx'
function Header(props) {

    const [darkTheme, setDarkTheme] = useState(true);

    function handleDarkClick(params) {
        setDarkTheme(!darkTheme);
        props.darkMode(!darkTheme)
    }
  return (
    <>
        <div className='container-fluid d-flex justify-content-between py-2' style={{backgroundColor: 'red'}}>
            <div>
                <h1>Online Code Editor</h1>
            </div>
            <div className='pe-5'>
                {darkTheme? 
                <button type="button" class="btn" onClick={handleDarkClick}>
                    <i class="bi bi-moon-stars-fill"></i>
                </button>
                : 
                <button type="button" class="btn" onClick={handleDarkClick}>
                    <i class="bi bi-brightness-high-fill"></i>
                </button>
                } 
                
            </div>
        </div>
    </>
  )
}

export default Header
