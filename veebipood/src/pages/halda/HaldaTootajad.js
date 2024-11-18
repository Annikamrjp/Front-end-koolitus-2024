import React, { useRef, useState } from 'react';
import tootajadFailist from '../../data/tootajad.json';
import { Link } from 'react-router-dom';

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist);
  const tootajaRef = useRef();
  const ametikohtRef = useRef();
  const telefonRef = useRef();
  const otsingRef = useRef();

function lisaTootaja() {
tootajadFailist.push({"nimi": tootajaRef.current.value, "ametikoht": ametikohtRef.current.value, "telefon": telefonRef.current.value});
muudaTootajad(tootajad.slice());
tootajaRef.current.value = "";
}

  function kustuta(index) {
    tootajad.splice(index, 1);
    muudaTootajad(tootajad.slice());
  }

  function otsi() {
    const vastus = tootajadFailist.filter(tootaja =>
         tootaja.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())
        );
    muudaTootajad(vastus);
}

  return (
    <div>
    <br></br>


    <input placeHolder="otsi" onChange={otsi} ref={otsingRef} type="text"></input>
    
    <br></br>
    <br></br>

     {/* 3 labelit ja 3 inputi kokku --> iga omaduse osas */}

      <label>Töötaja: </label>
      <input ref={tootajaRef} type="text"></input> <br></br>
      <label>Ametikoht: </label>
      <input ref={ametikohtRef} type="text"></input> <br></br>
      <label>Telefon: </label>
      <input ref={telefonRef} type="text"></input> <br></br>
      <button onClick={lisaTootaja}>Lisa</button> 

      <br></br>
      <br></br>
    
    <table>
      <thead>
      <tr>
        <th>Töötaja</th>
        <th>Ametikoht</th>
        <th>Telefon</th>
        <th>Kustuta</th>
        <th>Muuda</th>

      </tr>
      </thead>
      <tbody>
      {tootajad.map((tootaja, index) => 
      <tr key={index}>
        <td>{tootaja.nimi}</td>
        <td>{tootaja.ametikoht}</td>
        <td>{tootaja.tel}</td>
        
      <td><button onClick={() => kustuta(index)}>x</button></td>
      <td><Link to={"/muuda-tootaja/" + index}>
      <button>Muuda</button></Link>
      </td>
      </tr>)}
      </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad