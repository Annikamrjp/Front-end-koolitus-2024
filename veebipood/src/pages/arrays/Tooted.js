import React, { useRef, useState } from 'react';
import tootedFailist from '../../data/autod.json';

// {"nimi": "", "hind": 25000, "aktiivne": true, "pilt": ""}

function Tooted() {
  const [tooted, muudaTooted] = useState(tootedFailist);
  const otsingRef = useRef();

  function otsi() {
    const vastus = tootedFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
    muudaTooted(vastus);
}

  function arvutaKokku() {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.nimi.length)
    return summa;
}

// Sorteeri

function sorteeriAZ() {
    tooted.sort((a, b) => a.localeCompare (b, "et"));
    muudaTooted(tooted.slice());
} 

function sorteeriZA() {
  tooted.sort((a, b) => b.localeCompare (a, "et"));
  muudaTooted(tooted.slice());
}

function sorteeriKasvavalt() {
  tooted.sort((a, b) => a.length - b.length);
  muudaTooted(tooted.slice());
}

function sorteeriKahanevalt() {
  tooted.sort((a, b) => b.length - a.length);
  muudaTooted(tooted.slice());
}

// Filtreeri

function algavadBga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  muudaTooted(vastus);
}

function algavadNga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  muudaTooted(vastus);
}

function algavadTga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  muudaTooted(vastus);
}

function reset() {
  muudaTooted(["Nobe", "Toyota", "Bentley", "BMW", "Tesla", "Nissan"]);
}

  return (
    <div>
    <br></br>

    <span>Otsi toodet: </span> 
        <input onChange={otsi} ref={otsingRef} type="text"></input> <br></br>
      <br></br>

      <div>Täthti kokku kõikide toodete peale peale: {arvutaKokku()}</div>

      <br></br>

      <span>Sorteeri: </span>
      <button onClick={sorteeriAZ}>A-Z</button>
      <button onClick={sorteeriZA}>Z-A</button>
      <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Kahanevalt</button>

    <br></br>

      <span>Filtreeri: </span>
      <button onClick={algavadBga}>B-ga algavad</button>
      <button onClick={algavadNga}>N-ga algavad</button>
      <button onClick={algavadTga}>T-ga algavad</button>

    <br></br>
      <button onClick={reset}>Tühjenda filtrid</button>

      {tooted.map(toode => <div>{toode.nimi}</div>)}
    </div>
  )
}

export default Tooted