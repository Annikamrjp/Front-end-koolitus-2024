import React from 'react';
import { useState, useRef } from 'react';
import joogidFailist from '../data/joogid.json'

function Lisa() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);
    const jookRef = useRef();
 
function lisa() {
    joogidFailist.push(jookRef.current.value);
    uuendaJoogid(joogid.slice());
    jookRef.current.value = "";
 }

    return (
    <div>
        <label>Lisa jook: </label>
        <input ref={jookRef}></input>
        <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default Lisa