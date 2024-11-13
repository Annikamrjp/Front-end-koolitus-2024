import React from 'react';
import { useState } from 'react';
import joogidFailist from '../data/joogid.json'

function Avaleht() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);
  return (
    <div>
        {joogid.map(jook => <div>{jook}</div>)}
    </div>
  )
}

export default Avaleht