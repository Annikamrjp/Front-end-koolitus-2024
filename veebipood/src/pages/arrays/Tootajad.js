import React, { useRef, useState } from 'react';
import tootajadFailist from '../../data/tootajad.json';

// {"eesnimi": "", "ametikoht": "", "tel": "5342123"}

function Tootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist);
  const otsingRef = useRef()

  function otsi() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.includes(otsingRef.current.value));
    muudaTootajad(vastus);
}

  function arvutaKokku() {
    let summa = 0;
    tootajad.forEach(tootaja => summa = summa + tootaja.length)
    return summa;
}

// Sorteeri

function sorteeriAZ() {
  tootajad.sort((a, b) => a.localeCompare(b, "et"));
  muudaTootajad(tootajad.slice());
}

function sorteeriZA() {
  tootajad.sort((a, b) => b.localeCompare(a, "et"));
  muudaTootajad(tootajad.slice());
}

function tahedKasvavalt() {
  tootajad.sort((a, b) => a.length - b.length);
  muudaTootajad(tootajad.slice());
}

function tahedKahanevalt() {
  tootajad.sort((a, b) => b.length - a.length);
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
  const vastus = tootajadFailist.filter(tootaja => tootaja.length === 3);
  muudaTootajad(vastus);
}

function rohkemKui5Tahte() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.length >= 5);
  muudaTootajad(vastus);
}

function sisaldabAiLuhendit() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.includes("ai"));
  muudaTootajad(vastus);
}

function neljasTahtA() {
  const vastus = tootajadFailist.filter(tootaja => tootaja[3] === "a");
  muudaTootajad(vastus);
}

function algabMTahega() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.startsWith("M"));
  muudaTootajad(vastus);
}

function paarisarv() {
  const vastus = tootajadFailist.filter(tootaja => tootaja.length % 2 === 0);
  muudaTootajad(vastus);
}

function reset() {
  muudaTootajad(["Anu", "Katariina", "Peeter", "Mait"])
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
        <button>! ! !</button>

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

      {tootajad.map(tootaja => <div>{tootaja}</div>)}
    </div>
  )
}

export default Tootajad