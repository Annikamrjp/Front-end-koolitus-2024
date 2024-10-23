import React, { useState } from 'react'

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

  return (
  <div>
    <div>{keel}</div>
    <button className={keel === "est" ?  "keel-aktiivne" : "keel"} onClick={() => muudaKeel("est")}>Eesti</button>
    <button className={keel === "eng" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("eng")}>English</button>
    <button className={keel === "rus" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("rus")}>Pycckuj</button>

    {keel === "est" && <div>Leht on eesti keelne</div>}
    {keel === "eng" && <div>The site is in English</div>}
    {keel === "rus" && <div>Сайт на русском языке</div>}

  </div>
  )
}

export default Seaded