import React, { useState, useRef } from 'react'
import StandardKalkulaator from '../components/StandardKalkulaator';

function Kalkulaator() {
    const [vaade, muudaVaade] = useState("standard");

    

    const sisestusRef = useRef();
    const [hind, muudaHind] = useState(0);

    function arvuta() {muudaHind(sisestusRef.current.value);}

  return (
    <div>
        <br></br>
        <div>{vaade}</div>
        <button className={vaade === "standard" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("standard")}>Standard kalkulaator</button>
        <button className={vaade === "laenu" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("laenu")}>Laenukalkulaator</button>
        <button className={vaade === "maksimaalne" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("maksimaalne")}>Maksimaalne kalkulaator</button>


        {vaade === "standard" && <StandardKalkulaator />}
        
        {vaade === "laenu" &&
    <div>
        <input ref={sisestusRef} type="text"></input>
        <button onClick={arvuta}>Arvuta</button>
        Kuumakse: {hind * 3.65 / 12}        
    </div>}

    {vaade === "maksimaalne" &&
    <div>
        Maksimaalne pakutav limiit: {}        
    </div>}
    </div>
  )
}

export default Kalkulaator