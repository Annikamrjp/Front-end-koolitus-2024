import React from 'react';
import { useState } from 'react';
import joogidFailist from '../data/joogid.json'

function Halda() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);

function kustuta(index) {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogid.slice())
}



  return (
    <div>
        {joogid.map((jook, index) => 
        <div key={index}>
            {jook}
        <button onClick={() => kustuta(index)}>x</button>
        </div>)}

    <br></br>

    </div>
  )
}

export default Halda