import React, { useRef, useState } from 'react';
import autodFailist from '../../data/autod.json';
import { Link } from 'react-router-dom';

function HaldaAutod() {
  const [autod, muudaAutod] = useState(autodFailist);
  const autoRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const otsingRef = useRef();

function lisaAuto() {
  autodFailist.push(
    {"nimi": autoRef.current.value, "hind": hindRef.current.value, "aktiivne": aktiivneRef.current.value, "pilt": piltRef.current.value}
);
muudaAutod(autodFailist.slice());
autoRef.current.value = "";
}

function kustuta(index) {
  autodFailist.splice(index, 1)
  muudaAutod(autodFailist.slice())
}

function otsi() {
  // TODO: tõstutundlikkuse kaotamine ehk saab leida ka läbivate väikeste tähtedega
  const vastus = autodFailist.filter(auto =>
       auto.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())
      );
  muudaAutod(vastus);
}

  return (
    <div>
      <br></br>


<input placeHolder="otsi" onChange={otsi} ref={otsingRef} type="text"></input>
      <br></br>
      <br></br>


      <label>Auto </label>
        <input ref={autoRef} type="text"></input> <br></br>
        <label>Hind </label>
        <input ref={hindRef} type="text"></input> <br></br>
        <label>Aktiivne </label>
        <input ref={aktiivneRef} type="text"></input> <br></br>
        <label>Pilt </label>
        <input ref={piltRef} type="text"></input> <br></br>
        <button onClick={lisaAuto}>Lisa</button>

      <br></br>
      <br></br>

      <table>
        <thead>
          <tr>
            <th>Auto</th>
            <th>Hind</th>
            <th>Pilt</th>
            <th>Kustuta</th>
            <th>Muuda</th>


          </tr>
        </thead>
        <tbody>
      {autod.map((auto, index) => 
      <tr key={index}>
        <td>{auto.nimi}</td>
        <td>{auto.hind}</td>
        <td>{auto.pilt}</td>
        <td><button onClick={() => kustuta(index)}>x</button></td>
        <td><Link to={"/muuda-auto/" + index}>
        <button>Muuda</button></Link>
        </td>
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaAutod