import React, {useRef, useState} from 'react'

function MaksimaalneKalkulaator() {
  const peetavateRef = useRef();
  const sissetulekuteRef = useRef();
  const kuludeRef = useRef();
  const [maksimaalne, muudaMaksimaalne] = useState(0);
  
  const arvutaKokku = () => {
    muudaMaksimaalne(
      300/(peetavateRef.current.value+1)*(sissetulekuteRef.current.value-kuludeRef.current.value));
  }

  // siin ei pea lisama sõna "Number" 
  // sulgude ette, sest sõnu ei saa korrutada ega jne

  return (
    <div>
      <label>Ülalpeetavate arv</label>
      <input ref={peetavateRef} type="number"></input> <br></br>
      <label>Netosissetulek</label>
      <input ref={sissetulekuteRef} type="number"></input> <br></br>
      <label>Igakuised kohustused</label>
      <input ref={kuludeRef} type="number"></input> <br></br>
      <button onClick={arvutaKokku}>Arvuta kokku</button>
      <div>{maksimaalne.toFixed(0)} €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator