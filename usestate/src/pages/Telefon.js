import React, { useState } from 'react';

function Telefon() {
    const [varv, uuendaVarv] = useState("Vali värv!");
  return (
    <div>
        <br></br>
        {varv === "Vali värv!" && <div>Telefoni värv on valimata!</div>}
        <div>Telefoni värvus: {varv}</div>
        <button onClick={() => uuendaVarv("Must")}>Must</button>
        <button onClick={() => uuendaVarv("Kuldne")}>Kuldne</button>
        <button onClick={() => uuendaVarv("Sinine")}>Sinine</button>
        <button onClick={() => uuendaVarv("Punane")}>Punane</button>
        <button onClick={() => uuendaVarv("Lilla")}>Lilla</button>

        { varv === "Must" && <div className="must-ring"></div>}
        { varv === "Kuldne" && <div className="kuldne-ring"></div>}
        { varv === "Sinine" && <div className="sinine-ring"></div>}
        { varv === "Punane" && <div className="punane-ring"></div>}
        { varv === "Lilla" && <div className="lilla-ring"></div>}


    </div>
  )
}

export default Telefon