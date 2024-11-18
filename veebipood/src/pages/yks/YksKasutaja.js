import React from 'react';
import kasutajadFailist from '../../data/kasutajad.json'
import { useParams } from 'react-router-dom'

function YksKasutaja() {
  const {kasutaja} = useParams();
  const leitud = kasutajadFailist[kasutaja]
  return (
    <div>
      <div>Email: {leitud.email}</div>
      <div>Parool: {leitud.parool}</div>
      <div>Aasta: {leitud.aasta}</div>
      <div>Uudiskiri: {leitud.uudiskiri}</div>

    </div>
  )
}

export default YksKasutaja