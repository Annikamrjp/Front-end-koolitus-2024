import React, { useState } from 'react'

function Kinkekaart() {
const [summa, muudasumma] = useState(20);

  return (
    <div>
      <button onClick={() => muudasumma(20)}>20 €</button>
      <button onClick={() => muudasumma(50)}>50 €</button>
      <button onClick={() => muudasumma(100)}>100 €</button>

<br></br>

<div>Kinkekaart {summa}€</div>
    </div>
  )
}

export default Kinkekaart