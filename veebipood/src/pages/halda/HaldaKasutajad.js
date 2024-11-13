import React, { useState } from 'react';
import kasutajadFailist from '../../data/kasutajad.json';

function HaldaKasutajad() {
  const [kasutajad, muudaKasutajad] = useState(kasutajadFailist);
  return (
    <div>
    <br></br>

      <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Liitumise aasta</th>
          <th>Parool</th>
          <th>Liitunud uudiskirjaga</th>
          <th>Kustuta</th>
        </tr>
      </thead>
      <tbody>
      {kasutajad.map((kasutaja, index) => (
        <tr key={index}>
          <td>{kasutaja.email}</td>
          <td>{kasutaja.aasta}</td>
          <td>{kasutaja.parool}</td>
          <td>{kasutaja.uudiskiri}</td>
          <td><button>x</button></td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
  )
}

export default HaldaKasutajad