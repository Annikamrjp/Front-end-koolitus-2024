import React, { useState } from 'react';
import autodFailist from '../../data/autod.json';

function HaldaAutod() {
  const [autod, muudaAutod] = useState(autodFailist)

  return (
    <div>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Auto</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
      {autod.map(auto => 
      <tr>
        <td>{auto.nimi}</td>
        <td><button>x</button></td>
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaAutod