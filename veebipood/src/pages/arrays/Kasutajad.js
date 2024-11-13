import React, { useState, useRef } from 'react';
import kasutajadFailist from '../../data/kasutajad.json';

function Kasutajad() {
  const [kasutajad, muudaKasutajad] = useState(kasutajadFailist);
  const otsingRef = useRef();

  function arvutaKokku() {
    let summa = 0;
    kasutajad.forEach(kasutaja => summa = summa + kasutaja.email.length)
    return summa;
}

// function arvutaAastaKokku() {
//   let summa = 0;
//   kasutajad.forEach(kasutaja => summa = (summa + kasutaja.aasta) / 4)
//   return summa;
// }

  function otsiEmail() {
    const vastus = kasutajadFailist.filter(kasutaja => kasutaja.email.includes(otsingRef.current.value));
    muudaKasutajad(vastus);
}

function otsiAasta() {
  const vastus = kasutajadFailist.filter(kasutaja => kasutaja.parool.includes(otsingRef.current.value));
  muudaKasutajad(vastus);
}

//    sorteeri:

function sorteeriEmailAZ() {
  kasutajad.sort((a, b) => a.email.localeCompare(b.email, "et"));
  muudaKasutajad(kasutajad.slice());
}

function sorteeriEmailZA() {
  kasutajad.sort((a, b) => b.email.localeCompare(a.email, "et"));
  muudaKasutajad(kasutajad.slice());
}

function sorteeriKasvavalt() {
  kasutajad.sort((a, b) => a.email.length - b.email.length);
  muudaKasutajad(kasutajad.slice());
}

function sorteeriKahanevalt() {
  kasutajad.sort((a, b) => b.email.length - a.email.length);
  muudaKasutajad(kasutajad.slice());
}

function sorteeriAastaKasvavalt() {
  kasutajad.sort((a, b) => a.aasta - b.aasta);
  muudaKasutajad(kasutajad.slice());
}

function sorteeriAastaKahanevalt() {
  kasutajad.sort((a, b) => b.aasta - a.aasta);
  muudaKasutajad(kasutajad.slice());
}

//  Filtreeri:

function loodud2023() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.aasta === 2023);
  muudaKasutajad(vastus);
}

function loodud2021() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.aasta === 2021);
  muudaKasutajad(vastus);
}

function paroolAlla8() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.parool.length < 8);
  muudaKasutajad(vastus);
}

function uudiskiriJah() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.uudiskiri === "Jah");
  muudaKasutajad(vastus);
}

function uudiskiriEi() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.uudiskiri === "Ei");
  muudaKasutajad(vastus);
}

function gmail() {
  const vastus = kasutajad.filter(kasutaja => kasutaja.email.includes("gmail"));
  muudaKasutajad(vastus);
}

  return (
    <div>
      <br></br>

      <div>Täthti kokku kõikide meilide peale peale: {arvutaKokku()}</div>
      {/* <div>Keskmine aasta: {arvutaAastaKokku()}</div> */}


      <br></br>

      <span>Otsi emaili: </span> 
        <input onChange={otsiEmail} ref={otsingRef} type="text"></input> <br></br>
      <span>Otsi aastat: </span>
        <input onChange={otsiAasta} ref={otsingRef} type="text"></input>

      <br></br>
      <br></br>


      <span>Sorteeri: </span>
        <button onClick={sorteeriEmailAZ}>A-Z email järgi</button>
        <button onClick={sorteeriEmailZA}>Z-A email järgi</button>
        <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Kahanevalt</button>
        <button onClick={sorteeriAastaKasvavalt}>Aasta järgi kasvavlt</button>
        <button onClick={sorteeriAastaKahanevalt}>Aasta järgi kahanevalt</button>

      <br></br>

      <span>Filtreeri: </span>
        <button onClick={loodud2023}>Loodud 2023 a</button>
        <button onClick={loodud2021}>Loodud 2021 a</button>
        <button onClick={paroolAlla8}>Parool on alla 8 tähemärgi</button>
        <button onClick={uudiskiriJah}>Liitunud uudiskirjaga</button>
        <button onClick={uudiskiriEi}>Ei ole liitunud uudiskirjaga</button>
        <button onClick={gmail}>Gmailiga liitunud</button>
        

      <br></br>
      <br></br>

    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Liitumise aasta</th>
          <th>Parool</th>
          <th>Liitunud uudiskirjaga</th>
        </tr>
      </thead>
      <tbody>
      {kasutajad.map((kasutaja, index) => (
        <tr key={index}>
          <td>{kasutaja.email}</td>
          <td>{kasutaja.aasta}</td>
          <td>{kasutaja.parool}</td>
          <td>{kasutaja.uudiskiri}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Kasutajad