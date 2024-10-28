import React, { useState, useRef } from 'react'

function Seaded() {
const [keel, muudaKeel] = useState("est");
// sisu on mulle endale tähtis, et aru saaks, 
// mida üks või teine teeb

// "muudaKeel" is assigned but never used -
// kuskil ei muudeta muutujat -> {keel}

// "keel" is assigned but never used -
// muutujat muudetakse kogu aeg, aga muutujat ei kasutata

// kui HTML on {} sulgude sees ja tema ees on &&, siis seal peab olema
// tõde või väära väljastav võrdus. Kui tõde, siis näidatakse elementi.
// vähemalt üks peab olema võrduses muutuvas seisundis, siis ta
// vahepeal on tõde ja vahepeal mitte.

// alati kui on HTMLis dünaamika, siis on loogelised sulud

const aadressRef = useRef();
const emailRef = useRef();
const telefonRef = useRef();
const [aadress, muudaAadress] = useState();
const [email, muudaEmail] = useState();
const [telefon, muudaTelefon] = useState();


  return (
  <div>
    <div>{keel}</div>
    <button className={keel === "est" ?  "keel-aktiivne" : "keel"} onClick={() => muudaKeel("est")}>Eesti</button>
    <button className={keel === "eng" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("eng")}>English</button>
    <button className={keel === "rus" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("rus")}>Pycckuj</button>

    {keel === "est" && <div>Leht on eesti keelne</div>}
    {keel === "eng" && <div>The site is in English</div>}
    {keel === "rus" && <div>Сайт на русском языке</div>}

    <br></br>
    <label>Aadress</label> <br></br>
    <input ref={aadressRef} type="text"></input>
    <button onClick={() => muudaAadress(aadressRef.current.value)}>Sisesta</button>
    <br></br>

    <label>Email</label> <br></br>
    <input ref={emailRef} type="text"></input>
    <button onClick={() => muudaEmail(emailRef.current.value)}>Sisesta</button>
    <br></br>

    <label>Telefon</label> <br></br>
    <input ref={telefonRef} type="text"></input>
    <button onClick={() => muudaTelefon(telefonRef.current.value)}>Sisesta</button>
    <br></br>

    <div>Aadress: {aadress}</div>
    <div>Email: {email}</div>
    <div>Telefon: {telefon}</div>

  </div>
  )
}

export default Seaded