import React, {useState, useRef} from 'react'
import esindusedFailist from '../../data/esindused.json'
import { Link } from 'react-router-dom';

function HaldaEsindused() {          // jrk. nrid:     0            1               2           3           4           5                      
    const [esindused, muudaEsindused] = useState(esindusedFailist.slice());
    const esindusRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();
    const otsingRef = useRef();

function kustutaEsimene() {
    esindusedFailist.splice(0, 1); // .splice --> kustutamiseks
                    // nr 0 tähendab mitmendat järjekorras 
                    // nr 1 tähendab mitu tükki alates sellest elemendist
    muudaEsindused(esindusedFailist.slice()); // sama, mis .sort() järgselt
                    // uuendab HTMLi, pannes uuendatud esindused 'esindused' muutuja peale
}

function kustutaTeine() {
    esindusedFailist.splice(1, 1);
    muudaEsindused(esindusedFailist.slice());
}

function kustutaKolmas() {
    esindusedFailist.splice(2, 1);
    muudaEsindused(esindusedFailist.slice());
}

function kustuta(index) {
    esindusedFailist.splice(index, 1)
    muudaEsindused(esindusedFailist.slice())
}

// TODO: enteriga sisestamine
function lisaEsindus() {
    esindusedFailist.push(
        {"nimi": esindusRef.current.value, "tel": telefonRef.current.value, "aadress": aadressRef.current.value}
    );
    muudaEsindused(esindusedFailist.slice());
    esindusRef.current.value = "";
}

function otsi() {
    // TODO: tõstutundlikkuse kaotamine ehk saab leida ka läbivate väikeste tähtedega
    const vastus = esindusedFailist.filter(esindus =>
         esindus.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())
        );
    muudaEsindused(vastus);
}

function arvutaKokku() {
    let summa = 0;
    esindused.forEach(esindus => summa = summa + esindus.nimi.length)
    return summa;
}

    return (
    <div>
    <br></br>

        <div>Täthti kokku kõikide esinduste peale: {arvutaKokku()}</div>

    <br></br>

    <input placeHolder="otsi" onChange={otsi} ref={otsingRef} type="text"></input>
    {/* <button onClick={otsi}>Otsi</button> */}

    <br></br>
    <br></br>


        <label>Esindus </label>
        <input ref={esindusRef} type="text"></input> <br></br>
        <label>Telefon </label>
        <input ref={telefonRef} type="text"></input> <br></br>
        <label>Aadress </label>
        <input ref={aadressRef} type="text"></input> <br></br>
        <button onClick={lisaEsindus}>Lisa</button>

<br></br>
<br></br>

    <div>Kokku esindusi: {esindused.length} tk</div>

        {esindused.length > 0 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
        {esindused.length > 1 && <button onClick={kustutaTeine}>Kustuta teine</button>}
        {esindused.length > 2 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}

<br></br>
<br></br>

    <table>
        <thead>
          <tr>
            <th>Esindus</th>
            <th>Telefon</th>
            <th>Aadress</th>
            <th>Kustuta</th>
            <th>Muuda</th>

          </tr>
        </thead>
        <tbody>
            {esindused.map((esindus, index) =>
             <tr key={index}>
                <td>{esindus.nimi}</td>
                <td>{esindus.tel}</td>
                <td>{esindus.aadress}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
                <td>
                    <Link to={"/muuda-esindus/" + index}>
                    <button>Muuda</button>
                    </Link>
                </td>
            </tr>)}
        </tbody>
    </table>

    </div>
  )
}

// 3 varianti kuidas funktsioone käivitada:
// 1. <button onClick={() => kustuta()}></button>  
//          --> kui midagi saadetakse funktsiooni sisse, siis on vaja panna lõppu sulud ja algusesse sulud + nool: () =>
//                  Nii on kohustuslik ja võib ka alati panna sulge ja noolt
// 2. <button onClick={lisa}></button>
//          --> kui midagi ei saadeta funktsiooni sisse, siis pole vaja lõppu sulge panna, aga kui tahta, siis võib
//             <button onClick={lisa}></button> on sama, mis  <button onClick={() => lisa()}></button> 
// 3. <div>{arvutaKokku()}</div>   --> ilma klikkimata käivitatakse funktsioon, kohe lehele tulles

export default HaldaEsindused