import React from 'react';
import { useParams } from 'react-router-dom';
import tootajadFailist from '../../data/tootajad.json';

function MuudaTootaja() {
  const {tootaja} = useParams();
  const leitud = tootajadFailist[tootaja]

  return (
    <div>
      <input type="text" defaultValue={leitud.nimi}></input>
      <input type="text" defaultValue={leitud.ametikoht}></input>
      <input type="text" defaultValue={leitud.tel}></input>

    </div>
  )
}

export default MuudaTootaja