import React, { useState } from 'react'

function Meist() {
        const [kontakt, naitaKontakt] = useState("");
        const tootajad = [
                {nimi: "Arvo Pärt", ala: "Muusika", telefon: "+123123123"},
                {nimi: "Kelly Sildaru", ala: "Reporter", telefon: "+125125125"},
                {nimi: "Edward von Lõngus", ala: "Kujundus", telefon: "+127127127"},
                {nimi: "Kerli Kõiv", ala: "Välisturud", telefon: "+129129129"}
            ]

            const [valitud, uuendaValitud] = useState("");

        const votaUhendust = (tootaja) => {
                naitaKontakt(tootaja.telefon);
                uuendaValitud(tootaja.nimi);
        }

  return (
    <div>
        <div className="pealkiri">Meie töötajad:</div>
        Valitud inimene: {valitud}

<br></br>
<br></br>
        <div>
        {tootajad.map(tootaja =>
          <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => votaUhendust(tootaja)}>Võta ühendust</button>
            <br></br>
            <br></br>
           </div>)}
        </div>

        {/* <div className="tootaja">Arvo Pärt</div>
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
<br></br>*/}
        { kontakt !== "" && <div>Kontakt: {kontakt}</div>} 
    </div>
  )
}

export default Meist