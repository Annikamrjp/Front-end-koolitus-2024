import React, { useState, useRef } from 'react'

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");
  const tegelaneRef = useRef();

function lisaUusTegelane() {
  if (tegelaneRef.current.value === "") 
    {uuendaSonum("Tegelane on lisamata!");} else 
    {uuendaSonum("Tegelane lisatud: " + tegelaneRef.current.value);}
}
  return (
    <div>
    <div>{sonum}</div>
    <label>Tegelase nimi</label>
      <br></br>
    <input ref={tegelaneRef} type="text"></input>
      <br></br>
    <button onClick={lisaUusTegelane}>Lisa uus</button>
      <br></br>
    </div>
  )
}

export default LisaTegelane