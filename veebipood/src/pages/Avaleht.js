import React, {useState} from 'react'

//string - sõna
//number (saan teda kokku liita, korrutada, jagada, lahutada)
//boolean - kahendväärtus, alati üks või teine väärtus (saan teda tagurpidi keerata)

// jutumärkide sisse võib panna ükskõik mida
// ilma, võib jutumärkide sisse panna kas numbreid või true/false

function Avaleht() {
// useState-d kõik siin:
const [laigitud, muudaLaigitud] = useState(true);
const [kogus, muudaKogus] = useState(0);
const [sonum, muudaSonum] = useState("Muuda kogust");

function nulli() {
  muudaKogus(0);
  muudaSonum("Kogus nullis");
}

function vahenda() {
muudaKogus(kogus - 1);
muudaSonum("Kogus vähendatud");

}

function suurenda() {
  muudaKogus(kogus + 1);
  muudaSonum("Kogus suurendatud");
}

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
  <br></br>
  {/* 1. variant - kahe nupuga */}
<button onClick={() => muudaLaigitud(true)}>Pane Like</button>
<button onClick={() => muudaLaigitud(false)}>Eemalda Like</button>
  <br></br>
  {/* 2. variant - ühe nupuga */}
<button onClick={() => muudaLaigitud(!laigitud)}>Muuda Like'i</button>
   
<br></br><br></br>

<div>{sonum}</div>
<button disabled={kogus === 0} onClick={vahenda}>-</button>
<span>{kogus}</span>
<button onClick={suurenda}>+</button> <br></br>
{ kogus > 0 &&<button onClick={nulli}>Tagasi nulli</button>}


    </div>
  )
}

export default Avaleht