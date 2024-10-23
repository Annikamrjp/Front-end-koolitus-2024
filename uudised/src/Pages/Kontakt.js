import React, { useState } from 'react'

function Kontakt() {
  const [naitaTelKristiine, muudaNaitaTelKristiine] = useState(false);
  const [naitaTelUlemiste, muudaNaitaTelUlemiste] = useState(false);
  const [naitaTelTasku, muudaNaitaTelTasku] = useState(false);


  return (
    <div>
        
        <div className="pealkiri">Võta meiega ühendust:</div>
        <br></br>
        <div className="keskus" onClick={() => muudaNaitaTelKristiine(!naitaTelKristiine)}>Kristiine keskus</div>
        {naitaTelKristiine && <div>+351231231</div>}
        <div>Endla 45</div>

        <br></br>
        <div className="keskus" onClick={() => muudaNaitaTelUlemiste(!naitaTelUlemiste)}>Ülemiste keskus</div>
        {naitaTelUlemiste && <div>+34151231</div>}
        <div>Suur-Sõjamäe 4</div>

        <br></br>
        <div className="keskus" onClick={() => muudaNaitaTelTasku(!naitaTelTasku)}>Tasku keskus</div>
        {naitaTelTasku && <div>+39312323</div>}
        <div>Turu 2</div>  
    </div>
  );
}

export default Kontakt