import React from 'react';
import { useParams } from 'react-router-dom';
import autodFailist from '../../data/autod.json';


function MuudaAuto() {
  const {jrknr} = useParams()
  const  leitud = autodFailist[jrknr]

  return (
    <div>
      <input type="text" defaultValue={leitud.nimi}></input>
      <input type="number" defaultValue={leitud.hind}></input>
      <input type="text" defaultChecked={leitud.aktiivne}></input>
      <input type="text" defaultValue={leitud.pilt}></input>

    </div>
  )
}

export default MuudaAuto