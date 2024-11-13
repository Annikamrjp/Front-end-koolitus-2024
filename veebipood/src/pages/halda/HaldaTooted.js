import React, { useRef, useState } from 'react'

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(["Nobe", "Toyota", "Bentley", "BMW", "Tesla", "Nissan"]);
  const toodeRef = useRef();

function lisaToode() {
  tooted.push(toodeRef.current.value);
  muudaTooted(tooted.slice());
  toodeRef.current.value = "";
}

function kustuta(index) {
  tooted.splice(index, 1);
  muudaTooted(tooted.slice());
}

  return (
    <div>
      <br></br>
      <label>Toode: </label>
      <input ref={toodeRef}></input> <br></br>
      <button onClick={lisaToode}>Lisa</button>

    <br></br>
    <br></br>

    <table>
      <thead>
        <tr>
          <th>Toode</th>
          <th>Kustuta</th>
        </tr>
      </thead>
      <tbody>
      {tooted.map((toode, index) => 
      <tr key={index}>
      <td>{toode}</td>
      <td><button onClick={() => kustuta(index)}>x</button></td>
      </tr>)}
      </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted