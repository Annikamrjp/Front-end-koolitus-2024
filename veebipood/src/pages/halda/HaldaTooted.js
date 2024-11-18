import React, { useRef, useState } from 'react';
import tootedFailist from '../../data/autod.json';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// suure tähega HTML, väiksega JavaScript

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const toodeRef = useRef(); 
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const otsingRef = useRef();

function lisaToode() {
  tootedFailist.push({"nimi": toodeRef.current.value, "hind": hindRef.current.value, "aktiivne": aktiivneRef.current.value, "pilt": piltRef.current.value});
  muudaTooted(tooted.slice());  
  toodeRef.current.value = "";
  toast.success("Toode on edukalt lisatud!");
}

function kustuta(index) {
  tooted.splice(index, 1);
  muudaTooted(tooted.slice());
  toast.error("Toode on edukalt kustutatud!");

}

function otsi() {
  const vastus = tootedFailist.filter(toode =>
       toode.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())
      );
  muudaTooted(vastus);
}

  return (
    <div>
      <br></br>

    <input placeHolder="otsi" onChange={otsi} ref={otsingRef} type="text"></input>

      <br></br>
      <br></br>
      

      <label>Toode: </label>
      <input ref={toodeRef}></input> <br></br>
      <label>Hind: </label>
      <input ref={hindRef}></input> <br></br>
      <label>Aktiivne: </label>
      <input ref={aktiivneRef}></input> <br></br>
      <label>Pilt: </label>
      <input ref={piltRef}></input> <br></br>
      <button onClick={lisaToode}>Lisa</button>

    <br></br>
    <br></br>

    <table>
      <thead>
        <tr>
          <th>Toode</th>
          <th>Hind</th>
          <th>Pilt</th>
          <th>Kustuta</th>
          <th>Muuda</th>


        </tr>
      </thead>
      <tbody>
      {tooted.map((toode, index) => 
      <tr key={index} className={toode.aktiivne ? "aktiivne" : "mitteaktiivne"}>
      <td>{toode.nimi}</td>
      <td>{toode.hind}</td>
      <td>{toode.pilt}</td>
      <td><button onClick={() => kustuta(index)}>x</button></td>
      <td><Link to={"/muuda-toode/" + index}>
      <button>Muuda</button></Link>
      </td>
      </tr>)}
      </tbody>
      </table>
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      theme="dark" />
    </div>
  )
}

export default HaldaTooted