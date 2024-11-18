import React from 'react';
import { useParams } from 'react-router-dom';
import kasutajadFailist from '../../data/kasutajad.json';

function MuudaKasutaja() {
  const {kasutaja} = useParams()
  const leitud = kasutajadFailist[kasutaja]
  return (
    <div>
      <input type="text" defaultValue={leitud.email}></input>
      <input type="text" defaultValue={leitud.parool}></input>
      <input type="text" defaultValue={leitud.aasta}></input>
      <input type="text" defaultValue={leitud.uudiskiri}></input>

    </div>
  )
}

export default MuudaKasutaja