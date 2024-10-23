import React, { useState } from 'react'

function Meist() {
        const [kontakt, naitaKontakt] = useState("");
  return (
    <div>
        
        <div className="pealkiri">Meie töötajad:</div>
<br></br>
        <div className="tootaja">Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => naitaKontakt('+123123123')}>Võta ühendust</button>
<br></br>
<br></br>
        <div className="tootaja">Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => naitaKontakt('+125125125')}>Võta ühendust</button>
<br></br>
<br></br>
        <div className="tootaja">Edward von Lõngus</div>
        <div>Uudiste kujundaja</div>
        <button onClick={() => naitaKontakt('+127127127')}>Võta ühendust</button>
<br></br>
<br></br>
        <div className="tootaja">Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => naitaKontakt('+129129129')}>Võta ühendust</button>
<br></br>
<br></br>
        { kontakt !== "" && <div>Kontakt: {kontakt}</div>}

    </div>
  )
}

export default Meist