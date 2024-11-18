import React, { useRef, useState } from 'react';
import tootajadFailist from '../../data/tootajad.json';
import {Link} from 'react-router-dom';

// {"eesnimi": "", "ametikoht": "", "tel": "5342123"}

function Tootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist);
  const otsingRef = useRef()

  function otsi() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes(otsingRef.current.value));
    muudaTootajad(vastus);
}

  function arvutaKokku() {
    let summa = 0;
    tootajad.forEach(tootaja => summa = summa + tootaja.nimi.length)
    return summa;
}

// Sorteeri

function sorteeriAZ() {
  tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
  muudaTootajad(tootajad.slice());
}

function sorteeriZA() {
  tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
  muudaTootajad(tootajad.slice());
}

function tahedKasvavalt() {
  tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
  muudaTootajad(tootajad.slice());
}

function tahedKahanevalt() {
  tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
  muudaTootajad(tootajad.slice());
}

// function sorteeriTeineTahtAZ() {
//   tootajad.sort((a, b) => {
//     const aStr = a.toString();
//     const bStr = b.toString();
//     let aSecond = aStr[1];
//     let bSecond = bStr[1];
//     return aSecond.localeCompare(bSecond, "et");
//   });
// }
//   // 5. Teine täht A-Z

  // Filtreeri

function tapselt3Tahelised() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length === 3);
  muudaTootajad(vastus);
}

function rohkemKui5Tahte() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length >= 5);
  muudaTootajad(vastus);
}

function sisaldabAiLuhendit() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes("ai"));
  muudaTootajad(vastus);
}

function neljasTahtA() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi[3] === "a");
  muudaTootajad(vastus);
}

function algabMTahega() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.startsWith("M"));
  muudaTootajad(vastus);
}

function paarisarv() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length % 2 === 0);
  muudaTootajad(vastus);
}

function reset() {
  muudaTootajad(tootajadFailist)
}
  // Reset nupp

  return (
    <div>
    <br></br>

      <span>Otsi töötajat: </span> 
        <input onChange={otsi} ref={otsingRef} type="text"></input> <br></br>
      <br></br>

      <div>Täthti kokku kõikide meilide peale peale: {arvutaKokku()}</div>

      <br></br>
      <span>Sorteeri: </span>
        <button onClick={sorteeriAZ}>A-Z</button>
        <button onClick={sorteeriZA}>Z-A</button>
        <button onClick={tahedKasvavalt}>Kasvavalt</button>
        <button onClick={tahedKahanevalt}>Kahanevalt</button>

      <br></br>
      <span>Filtreeri: </span>
        <button onClick={tapselt3Tahelised}>Täpselt 3 tähelised</button>
        <button onClick={rohkemKui5Tahte}>Rohkem kui 5 tähelised</button>
        <button onClick={sisaldabAiLuhendit}>"ai" lühendit sisaldavad</button>
        <button onClick={neljasTahtA}>Neljas täht "a"</button>
        <button onClick={algabMTahega}>"M" tähega algavad</button>
        <button onClick={paarisarv}>Paarisarv tähti</button>

      <br></br>
        <button onClick={reset}>Tühjenda filtrid</button>

      <br></br>
      <br></br>

      {tootajad.map((tootaja, index) => 
      <div key={index}>
        {tootaja.nimi} - {tootaja.ametikoht} - {tootaja.tel}
        <Link to={"/tootaja/" + index}>
        <button>Vaata lähemalt</button>
        </Link>
        </div>
      )}


    </div>
  )
}

export default Tootajad