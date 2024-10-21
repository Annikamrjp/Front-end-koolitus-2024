import React, {useState} from 'react'

//string - sõna
//number (saan teda kokku liita, korrutada, jagada, lahutada)
//boolean - kahendväärtus, alati üks või teine väärtus (saan teda tagurpidi keerata)

// jutumärkide sisse võib panna ükskõik mida
// ilma, võib jutumärkide sisse panna kas numbreid või true/false

function Avaleht() {
const [laigitud, muudaLaigitud] = useState(true);

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
    </div>
  )
}

export default Avaleht