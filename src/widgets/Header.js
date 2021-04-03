import React from 'react'

const Header = () => {
    return (
        <>
          <header>
            <nav>
                <ul>
                    <li>
                        Grid :
                        <span>10 x 10</span>
                    </li>
                    <li>
                        <input type='range'/>
                    </li>
                    <li>
                        Time spent :
                        <span>00:48 seconds</span>
                    </li>
                </ul>
            </nav>
          </header>  
        </>
    )
}

export default Header
