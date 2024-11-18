import React from 'react';
import { useParams } from 'react-router-dom';
import hinnadFailist from '../../data/hinnad.json'

function MuudaHind() {
  const {hind} = useParams()
  const leitud = hinnadFailist[hind]

  return (
    <div>
      <input type="text" defaultValue={leitud.number}></input>
      <input type="text" defaultValue={leitud.lisaja}></input>

    </div>
  )
}

export default MuudaHind