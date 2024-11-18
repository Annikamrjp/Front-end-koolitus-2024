import React, { useState } from 'react'; // tuleb reactist: useState, useRef
import { Link } from 'react-router-dom'; //URL-ga seotud: Link, Route, Routes
import ostukorvFailist from '../data/ostukorv.json';

// kirjutamisel kaks varianti:
// 1. Emmet     div + enter --> <div></div>
//              button + enter --> <button></button>
// 2. Soovin importi    <Li   dropdownist --> Link    react-router-dom
//                      <Page dropdownist --> Page    ./pages/Page

function Ostukorv() {
  const [tooted, muudaTooted] = useState(ostukorvFailist.slice());

function kustuta(index) {
  ostukorvFailist.splice(index, 1); // splice(mitmendat, mitu tk)
  muudaTooted(ostukorvFailist.slice());
}

function tuhjenda() {
  ostukorvFailist.splice(0);  // alates 0ndast (esimesest) lõpuni välja
  muudaTooted(ostukorvFailist.slice());
}

function arvutaKokku() {
  let summa = 0;
  tooted.forEach(toode => summa = summa + toode.hind)
  return summa;
}

  return (
    <div>
      <button onClick={tuhjenda} >Tühjenda</button>

      {tooted.map((toode, index) => 
        <div key={index}>
          <img src={toode.pilt} style={{"width": "50px"}} alt=""></img>
          {toode.nimi} - {toode.hind}€
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      {tooted.length === 0 && <div>
        Ostukorv on tühi
        <Link to="/">
      Mine avalehele
      </Link>
        </div>}

        <div>Kokku: {arvutaKokku()}€</div>
      
    </div>

    // Siit allapoole ei tohi kirjutada
    
  )
}

export default Ostukorv