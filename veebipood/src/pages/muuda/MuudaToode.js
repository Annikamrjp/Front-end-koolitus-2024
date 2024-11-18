import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import tootedFailist from '../../data/autod.json';

function MuudaToode() {
  const {toode} = useParams();
  const leitud = tootedFailist[toode];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  function muuda() { // kõik ref.current.value kohad on by default sõnad
    tootedFailist[toode] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    };
  }

  // kõik, mis pole sõna kujul (number / boolean), pean lisama midagi erilist:
  // numbri puhul .current.value osas Number() ümber
  // booleani puhul .current.checked ja defaultChecked HTMLs

  return (
    <div>
    <label>Nimi</label> <br></br>
      <input ref={nimiRef} type="text" defaultValue={leitud.nimi}></input> <br></br>
    <label>Hind</label> <br></br>
      <input ref={hindRef} type="number" defaultValue={leitud.hind}></input> <br></br>
    <label>Aktiivne</label> <br></br>
      <input ref={aktiivneRef} type="checkbox" defaultChecked={leitud.aktiivne}></input> <br></br>
    <label>Pilt</label> <br></br>
      <input ref={piltRef} type="text" defaultValue={leitud.pilt}></input> <br></br>

    <br></br>

    <Link to="/halda-tooted">
      <button onClick={muuda}>Muuda</button>
    </Link>

    </div>
  )
}

export default MuudaToode