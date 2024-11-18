import React from 'react';
import tootajadFailist from '../../data/tootajad.json'
import { useParams } from 'react-router-dom'

function YksTootaja() {
  const {inimene} = useParams();
  const leitud = tootajadFailist[inimene];

  return (
    <div>
      <div>Töötaja nimi: {leitud.nimi}</div>
      <div>Ametikoht: {leitud.ametikoht}</div>
      <div>Telefon: {leitud.tel}</div>
    </div>
  )
}

export default YksTootaja