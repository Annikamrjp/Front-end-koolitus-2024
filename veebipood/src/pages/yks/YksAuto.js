import React from 'react';
import autodFailist from '../../data/autod.json'
import { useParams } from 'react-router-dom'

function YksAuto() {
  const {auto_id} = useParams();
  const leitud = autodFailist[auto_id]

  return (
    <div>
      <div>Auto: {leitud.nimi}</div>
      <div>Hind: {leitud.hind}</div>
      <div>Aktiivne: {leitud.aktiivne}</div>
      <div>Pilt: {leitud.pilt}</div>

    </div>
  )
}

export default YksAuto