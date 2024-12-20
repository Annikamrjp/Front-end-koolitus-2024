import React, {useState} from 'react'
import Esindus from '../../components/Esindus'
import esindusedFailist from '../../data/esindused.json';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

// loogeliste sulgude vahel on JavaScript --> muutujad
// 'something' is not defined. --> muutuja on loomata või importimata

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");
  const [esindused, muudaEsindused] = useState(esindusedFailist.slice());

  const sorteeriAZ = () => {
    esindused.sort((a, b) => a.nimi.localeCompare(b.nimi, "et")); //"et" siis on täpitähed õiges järjestuses
    muudaEsindused(esindused.slice())
  }

  const sorteeriZA = () => {
    esindused.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
    muudaEsindused(esindused.slice())
  }

  const sorteeriTahemargidKasv = () => {
    esindused.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaEsindused(esindused.slice())
  }

  const sorteeriTahemargidKah = () => {
    esindused.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaEsindused(esindused.slice())
  }

  const sorteeriKolmasTahtAZ = () => {                    // 01234567
    esindused.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));   // Kristiine (3. täht = 2. täht)
    muudaEsindused(esindused.slice())
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.endsWith("e"));
    muudaEsindused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.length >= 7);
    muudaEsindused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.length === 9);
    muudaEsindused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.includes("is"));
    muudaEsindused(vastus);
  }

  const filtreeriNeljasTahtS = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi[3] === "s");
    muudaEsindused(vastus);
  }

  const reset = () => {
    muudaEsindused(esindusedFailist.slice())
  }

  return (
    <div>
      <br></br>
  <Button
    variant={linn === "Tallinn" ? "contained" : ""}
    className={linn === "Tallinn" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tallinn")}>Tallinn</Button>
  <Button 
    variant={linn === "Tartu" ? "contained" : ""}
    className={linn === "Tartu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Tartu")}>Tartu</Button>
  <Button 
    variant={linn === "Narva" ? "contained" : ""}
    className={linn === "Narva" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Narva")}>Narva</Button>
  <Button 
    variant={linn === "Pärnu" ? "contained" : ""}
    className={linn === "Pärnu" ? "linn-aktiivne" : ""} onClick={() => muudaLinn("Pärnu")}>Pärnu</Button>

<br></br>
<br></br>


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
  {esindused.map((esindus, index) => <div key={index}>{esindus.nimi}
    <Link to={"/esindus/" + index}>
    <button>Vaata lähemalt</button>
    </Link>
  </div>)}
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