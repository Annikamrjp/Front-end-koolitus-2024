import React, {useRef, useState} from 'react'

// kodus:
// inputis:
// 1. ostuhind useRef
// 2. sissemakse useRef
//    ostuhindRef - sissemakseRef
//  HTML: <div>{laenusumma}</div> useState [laenusumma, muudaLaenusumma]
// 3. periood useRef
// 4. marginaal useRef
// 5. euribor useRef
//    marginaalRef + euriborRef
// HTML: <div>{intress}</div> useState [intress, muudaIntress]

// valem: (ostuhindRef.current.value - sissemakseRef.current.value) / (perioodRef.current.value * 12) *
// (marginaalRef.current.value * euriborRef.current.value / 12)
// See tuleb kuumakse sisse
//HTML: <div>{Kuumakse}</div> useState [kuumakse, muudaKuumakse]



function LaenuKalkulaator() {
  const nr1Ref = useRef();
  const nr2Ref = useRef();
  // esimene läheb HTMLi, teine käivitub klikiga
  const [summa, muudaSumma] = useState(0);

  const liidaKokku = () => {
    muudaSumma(Number(nr1Ref.current.value) + Number(nr2Ref.current.value))
  }

  const korrutaKokku = () => {
    muudaSumma(nr1Ref.current.value * nr2Ref.current.value)
  }
  

  // liitmise puhul tuleb lisada sõna "Number" 
  // sulgude ette, sest sõnu saab ka liita

  return (
    <div>
      <input ref={nr1Ref} type="number"></input>
      <input ref={nr2Ref} type="number"></input>
      <button onClick={liidaKokku}>Liida kokku</button>
      <button onClick={korrutaKokku}>Korruta kokku</button>
      <div>{summa}€</div>
    </div>
  )
}

export default LaenuKalkulaator