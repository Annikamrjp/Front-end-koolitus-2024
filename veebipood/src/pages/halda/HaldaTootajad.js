import React, { useRef, useState } from 'react';
import tootajadFailist from '../../data/tootajad.json';

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist);
  const tootajaRef = useRef();

function lisaTootaja() {
tootajad.push(tootajaRef.current.value);
muudaTootajad(tootajad.slice());
tootajaRef.current.value = "";
}

  function kustuta(index) {
    tootajad.splice(index, 1);
    muudaTootajad(tootajad.slice());
  }

  return (
    <div>
    <br></br>

      <label>Töötaja: </label>
      <input ref={tootajaRef} type="text"></input> <br></br>
      <button onClick={lisaTootaja}>Lisa</button> 

      <br></br>
      <br></br>
    
    <table>
      <thead>
      <tr>
        <th>Töötaja</th>
        <th>Kustuta</th>
      </tr>
      </thead>
      <tbody>
      {tootajad.map((tootaja, index) => 
      <tr key={index}>
        <td>{tootaja}</td>
      <td><button onClick={() => kustuta(index)}>x</button></td>
      </tr>)}
      </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad