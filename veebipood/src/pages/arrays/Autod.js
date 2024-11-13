import React, { useRef, useState } from 'react';
import autodFailist from '../../data/autod.json';
import ostukorvFailist from '../../data/ostukorv.json';
import { Link } from 'react-router-dom';

// string --> "Ülemiste".includes()     "Ülemiste".startsWith()     "Ülemiste".length
// array -->  [].filter     [].sort     [].forEach      [].push     [].splice       [].length
// object --> {"aasta": 2010} punktiga saan küsida ainult võtme kaudu väärtust
//              {"aasta": 2010}.aasta --> 2010

function Autod() {
    const [autod, muudaAutod] = useState(autodFailist.slice());
    const otsingRef = useRef();

function otsi() {
    const vastus = autodFailist.filter(auto => auto.nimi.includes(otsingRef.current.value));
    muudaAutod(vastus);
}

function sorteeriAZ() {
    autod.sort((a, b) => a.nimi.localeCompare(b.nimi));
    muudaAutod(autod.slice());
}

function hindKasvavalt() {
    autod.sort((a, b) => a.hind - b.hind);
    muudaAutod(autod.slice());
}

function arvutaKokku() {
    let summa = 0;
    autod.forEach(auto => summa = summa + auto.hind);
    return summa;
}

function filtreeriBgaAlgavad() {
    const vastus = autod.filter(auto => auto.nimi.startsWith("B"));
    muudaAutod(vastus);
}

function lisaOstukorvi(auto) {
    ostukorvFailist.push(auto);
}

  return (
    <div>
    <br></br>
        <span>Otsi toodet: </span> 
            <input onChange={otsi} ref={otsingRef} type="text"></input> <br></br>
      
        <br></br>
        <div>{arvutaKokku()}€</div>
        <br></br>

        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={hindKasvavalt}>Hind kasvavalt</button>
        <button onClick={filtreeriBgaAlgavad}>Filtreeri B-ga algavad</button>



        {autod.map((auto, index) => 
        <div key={index}>
            {auto.nimi} - {auto.hind}€
            <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
            <Link to={"/auto/" + index}>
            <button>Vaata lähemalt</button>
            </Link>
            {/* {auto} --> nii ei saa objekti välja kuvada HTMLis */}
        </div>)}
    </div>
  )
}

export default Autod