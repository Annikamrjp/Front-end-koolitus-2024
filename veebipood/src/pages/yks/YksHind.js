import React from 'react';
import hinnadFailist from '../../data/hinnad.json'
import { useParams } from 'react-router-dom'

function YksHind() {
  const {number} = useParams();
  const leitud = hinnadFailist[number];

  return (
    <div>
      <div>Number: {leitud.number}</div>
      <div>Lisaja: {leitud.lisaja}</div>
    </div>
  )
}

export default YksHind