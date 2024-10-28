import React from 'react';
import { useRef, useState} from 'react';

function Naide() {
    const inputistLugeja =useRef();
    const [muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState("");

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }
  return (
    <div>
        <input ref={inputistLugeja} type="text" ></input>
        <button onClick={onClickFunktsioon} >Muuda</button>
        <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Naide