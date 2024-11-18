import React, { useRef, useState } from 'react';
import kasutajadFailist from '../../data/kasutajad.json';
import { Link } from 'react-router-dom';

function HaldaKasutajad() {
  const [kasutajad, muudaKasutajad] = useState(kasutajadFailist);

  const emailRef = useRef();
  const paroolRef = useRef();
  const aastaRef = useRef();
  const uudiskiriRef = useRef();
  const otsingRef = useRef();
 
  function kustuta(index) {
    kasutajadFailist.splice(index, 1)
    muudaKasutajad(kasutajadFailist.slice())
}

function lisaKasutaja() {
  kasutajadFailist.push(
    {"email": emailRef.current.value, "parool": paroolRef.current.value, "aasta": aastaRef.current.value, "uudiskiri": uudiskiriRef.current.value}
);
muudaKasutajad(kasutajadFailist.slice());
emailRef.current.value = "";
}

function otsi() {
  const vastus = kasutajadFailist.filter(kasutaja =>
       kasutaja.email.toLowerCase().includes(otsingRef.current.value.toLowerCase())
      );
  muudaKasutajad(vastus);
}

  return (
    <div>
    <br></br>

  <input placeHolder="otsi" onChange={otsi} ref={otsingRef} type="text"></input>

    <br></br>
    <br></br>


    <label>Email </label>
        <input ref={emailRef} type="text"></input> <br></br>
        <label>Parool </label>
        <input ref={paroolRef} type="text"></input> <br></br>
        <label>Aasta </label>
        <input ref={aastaRef} type="text"></input> <br></br>
        <label>Uudiskiri </label>
        <input ref={uudiskiriRef} type="text"></input> <br></br>
        <button onClick={lisaKasutaja}>Lisa</button>

<br></br>
<br></br>

      <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Liitumise aasta</th>
          <th>Parool</th>
          <th>Liitunud uudiskirjaga</th>
          <th>Kustuta</th>
          <th>Muuda</th>

        </tr>
      </thead>
      <tbody>
      {kasutajad.map((kasutaja, index) => (
        <tr key={index}>
          <td>{kasutaja.email}</td>
          <td>{kasutaja.aasta}</td>
          <td>{kasutaja.parool}</td>
          <td>{kasutaja.uudiskiri}</td>
          <td><button onClick={() => kustuta(index)}>x</button></td>
          <td><Link to={"/muuda-kasutaja/" + index}>
          <button>Muuda</button></Link>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
  )
}

export default HaldaKasutajad