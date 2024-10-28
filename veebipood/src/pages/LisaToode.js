import React, { useState, useRef } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState(); // HTMLis dünaamika tekitamiseks
  const toodeRef = useRef(); //HTMLi inputi sisestuse lugemiseks

  function lisa() {
    // toodeRef.current.value === "" ? muudaSonum("Tühja nimega ie saa") : muuda("Lisatud")
    if (toodeRef.current.value === "") 
      {muudaSonum("Toode on sisestamata!");} else 
      {muudaSonum("Toode lisatud: " + toodeRef.current.value);}
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br></br>
      <input ref={toodeRef} type="text"></input> <br></br>
      <button onClick={lisa}>Sisesta</button> <br></br>
    </div>
  )
}

export default LisaToode

// Kuhu tulevad vead:
//1. kompileerimise vead --> punane joon all, localhostis on punane tekst
// = compile-time errors
// vea leiab üles sealt, kus rakenduse käima panin
// või ka lehelt saan lugeda (punane tekst)

// 2. käimasoleku vead --> ei tööta, mida ootan, et töötaks
// või leht on üleni valge
// = run-time errors
// vea leiab üles tehes lehel parem klõps -> inspext -> console