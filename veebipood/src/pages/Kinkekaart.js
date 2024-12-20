import React, { useState, useRef } from 'react';
import ostukorvFailist from '../data/ostukorv.json';

function Kinkekaart() {
const [summa, muudasumma] = useState(20);
const [kogus, muudaKogus] = useState(1);

const emailRef = useRef();

const [sonum, muudaSonum] = useState();

// "const sisesta = () => {}" on sama mis "function sisesta () {}"
const lisaOstukorvi = () => {if (emailRef.current.value === "") 
  {muudaSonum("Ostukorvi on lisamata!")} else 
  {muudaSonum("Ostukorvi on lisatud!")}; 
  ostukorvFailist.push({"nimi": "Kinkekaart: " + emailRef.current.value, 
  "hind": summa * kogus, 
  "aktiivne": true, 
  "pilt": ""
});
}


  return (
    <div>
      <br></br>
      <button className={summa === 20 ? "summa-aktiivne" : "summa"} onClick={() => muudasumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-aktiivne" : "summa"} onClick={() => muudasumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-aktiivne" : "summa"} onClick={() => muudasumma(100)}>100 €</button>

<br></br>

<div>Kinkekaart {summa}€</div>

<br></br>


<button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
<span>{kogus}</span>
<button onClick={() => muudaKogus(kogus + 1)}>+</button>

<br></br> <br></br>

Kinkekaartide kogusuma: <span>{summa * kogus}</span>


<br></br>


<div>{sonum}</div>
<label>E-mail</label> <br></br>
<input ref={emailRef} type="text"></input> <br></br>
<button onClick={lisaOstukorvi}>Lisa ostukorvi</button> <br></br>
    </div>
  )
}

export default Kinkekaart