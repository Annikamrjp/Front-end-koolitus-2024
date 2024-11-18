import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import esindusedFailist from '../../data/esindused.json';

function MuudaEsindus() {
    const {esinduse_index} = useParams()
    const leitud = esindusedFailist[esinduse_index];

    const nimiRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();

  function muuda() {
    esindusedFailist[esinduse_index] = {
      "nimi": nimiRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
    };
  }


  return (
    <div>
      <label>Nimi: </label> <br></br>
        <input ref={nimiRef} type="text" defaultValue={leitud.nimi}></input> <br></br>
      <label>Telefon: </label> <br></br>
        <input ref={telefonRef} type="text" defaultValue={leitud.tel}></input> <br></br>
      <label>Aadress: </label> <br></br>
        <input ref={aadressRef} type="text" defaultValue={leitud.aadress}></input> <br></br>

<br></br>

    <Link to="/halda-esindused">
      <button onClick={muuda}>Muuda</button>
    </Link>

    </div>
  )
}

export default MuudaEsindus