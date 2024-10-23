import React, { useState } from 'react'

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  return (
    <div>
      <div>Sõnum: {message}</div>
        <label>Mark</label> <br></br>
            <input type="text"></input> <br></br>
        <label>Mudel</label> <br></br>
            <input type="text"></input> <br></br>
        <label>Maksumus</label> <br></br>
            <input type="number"></input> <br></br>
            {message === "Lisa arvuti!" && <button onClick={() => setMessage("Lisatud!")}>Sisesta</button>}
    </div>
  )
}

export default LisaArvuti