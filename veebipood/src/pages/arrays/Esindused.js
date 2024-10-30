import React, {useState} from 'react'
import Esindus from '../../components/Esindus'

// loogeliste sulgude vahel on JavaScript --> muutujad
// 'something' is not defined. --> muutuja on loomata või importimata

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");
  const [esindused, muudaEsindused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  const sorteeriAZ = () => {
    esindused.sort((a, b) => a.localeCompare(b, "et")); //"et" siis on täpitähed õiges järjestuses
    muudaEsindused(esindused.slice())
  }

  const sorteeriZA = () => {
    esindused.sort((a, b) => b.localeCompare(a, "et"));
    muudaEsindused(esindused.slice())
  }

  const sorteeriTahemargidKasv = () => {
    esindused.sort((a, b) => a.length - b.length);
    muudaEsindused(esindused.slice())
  }

  const sorteeriTahemargidKah = () => {
    esindused.sort((a, b) => b.length - a.length);
    muudaEsindused(esindused.slice())
  }

  const sorteeriKolmasTahtAZ = () => {                    // 01234567
    esindused.sort((a, b) => a[2].localeCompare(b[2]));   // Kristiine (3. täht = 2. täht)
    muudaEsindused(esindused.slice())
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = esindused.filter(esindus => esindus.endsWith("e"));
    muudaEsindused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = esindused.filter(esindus => esindus.length >= 7);
    muudaEsindused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindused.filter(esindus => esindus.length === 9);
    muudaEsindused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = esindused.filter(esindus => esindus.includes("is"));
    muudaEsindused(vastus);
  }

  const filtreeriNeljasTahtS = () => {
    const vastus = esindused.filter(esindus => esindus[3] === "s");
    muudaEsindused(vastus);
  }

  const reset = () => {
    muudaEsindused(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"])
  }

  return (
    <div>
      <br></br>
      <div>{linn}</div>
<button className={linn === "Tallinn" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
<button className={linn === "Tartu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tartu")}>Tartu</button>
<button className={linn === "Narva" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Narva")}>Narva</button>
<button className={linn === "Pärnu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>


{linn === "Tallinn" && 
<div>
  {/* sorteerimine */}
  <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
  <button onClick={sorteeriZA}>Sorteeri Z-A</button>
  <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</button>
  <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button>
  <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
 
 <br></br>

  {/* filtreerimine */}
    <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button>
    <button onClick={filtreeriVah7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
    <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
    <button onClick={filtreeriIsSisaldavad}>Filtreeri 'is' lühendit sisaldavad</button>
    <button onClick={filtreeriNeljasTahtS}>Filtreeri neljas täht 's'</button>

<br></br>
<button onClick={reset}>Tühjenda filtrid</button>

 <br></br>
  {esindused.map(esindus => <div>{esindus}</div>)}
  {/* <div>Ülemiste</div>
  <div>Rocca</div>
  <div>Magistrali</div>
  <div>Vesse</div>
  <div>Kristiine</div>
  <div>Järveotsa</div> */}
  </div>}

{linn === "Tartu" && 
<div>
  <div>Lõunakeskus</div>
  <div>Raatuse</div>  
</div>}

{linn === "Narva" && <div>Fama keskus</div>}

{linn === "Pärnu" && <div>Port Artur 2</div>}

<br></br>
      <br />
      <br /> 
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
    </div>
  )
}

export default Esindused