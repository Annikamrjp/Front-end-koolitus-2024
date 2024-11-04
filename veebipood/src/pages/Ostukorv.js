import React, { useState } from 'react' // tuleb reactist: useState, useRef
import { Link } from 'react-router-dom' //URL-ga seotud: Link, Route, Routes

// kirjutamisel kaks varianti:
// 1. Emmet     div + enter --> <div></div>
//              button + enter --> <button></button>
// 2. Soovin importi    <Li   dropdownist --> Link    react-router-dom
//                      <Page dropdownist --> Page    ./pages/Page

function Ostukorv() {
  const [tooted, muudaTooted] = useState(["Coca","Fanta","Sprite","Vichy","Aura"]);

  return (
    <div>
      <button onClick={() => muudaTooted([])} >Tühjenda</button>

      {tooted.map((toode, index) => 
        <div key={index}>
          {toode}
          <button>x</button>
        </div>)}

      {tooted.length === 0 && <div>
        Ostukorv on tühi
        <Link to="/">
      Mine avalehele
      </Link>
        </div>}
      
    </div>

    // Siit allapoole ei tohi kirjutada
    
  )
}

export default Ostukorv