import React, {useRef, useState} from 'react';

function Tagasiside() {
  const [tagasisided, uuendaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
  const tagasisideRef = useRef();

function kustuta(index) {
  tagasisided.splice(index, 1);
  uuendaTagasisided(tagasisided.slice());
}

function lisaTagasiside() {
  tagasisided.push(tagasisideRef.current.value);
  uuendaTagasisided(tagasisided.slice());
  tagasisideRef.current.value = "";
}

  return (
    <div>Tagasisided:
    {tagasisided.map((tagasiside, index) => 
    <div key={index}>
    {tagasiside}
    <button onClick={() => kustuta(index)}>x</button>
    </div>)}

    <br></br>
    <label>Lisa tagasiside </label>
    <input ref={tagasisideRef}></input> <br></br>
    <button onClick={lisaTagasiside}>Lisa</button>
    </div>
  )
}

export default Tagasiside