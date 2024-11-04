import React, {useState} from 'react'

function Monthss() {
  const [months, muudaMonths] = useState(["March", "Jan", "Feb", "Dec"]);

  function reset() {
    muudaMonths([])
  }

  return (
    <div>Months:
      {months.map(month => <div>{month}</div>)}

      <br></br>

      <button onClick={reset}>Tühjenda</button>
    </div>
  )
}

export default Monthss