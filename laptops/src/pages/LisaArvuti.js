import React, { useState } from 'react'

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!")
  const [naitaNuppu, uuendaNaitaNuppu] = useState(true);

  function addProduct() {
    setMessage("Arvuti lisatud!");
    uuendaNaitaNuppu(false);
  }

  return (
    <div>
      <div>Sõnum: {message}</div>
        <label>Mark</label> <br></br>
            <input type="text"></input> <br></br>
        <label>Mudel</label> <br></br>
            <input type="text"></input> <br></br>
        <label>Maksumus</label> <br></br>
            <input type="number"></input> <br></br>
            { naitaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button>}
    </div>
  )
}

export default LisaArvuti