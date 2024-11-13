import React, { useRef, useState } from 'react';
import nimedFailist from '../data/nimed.json'

function TagasisideAndjad() {
    const [nimed, muudaNimed] = useState(nimedFailist);
    const nimiRef = useRef();


function kokku() {
    let summa = 0;
    nimed.forEach(nimi => summa = summa + nimi.length);
    return summa;
}

//      Filtreeri:

function algavadMTahega() {
    const vastus = nimed.filter(nimi => nimi.startsWith("M"));
    muudaNimed(vastus);
}

function kuueKohalised() {
    const vastus = nimed.filter( nimi => nimi.length === 6);
    muudaNimed(vastus);
}

function loppebYTahega() {
    const vastus = nimed.filter( nimi => nimi.endsWith("y"));
    muudaNimed(vastus);
}       

//      Sorteeri:

function sorteeriZA() {
    nimedFailist.sort((a, b) => b.localeCompare(a, "et"));
    muudaNimed(nimed.slice());
}

function lisa() {
    nimed.push(nimiRef.current.value);
    muudaNimed(nimed.slice());
    nimiRef.current.value = "";
}

function kustuta(index) {
    nimedFailist.splice(index, 1);
    muudaNimed(nimedFailist.slice());
}
  return (
    <div>
        <div>Nimesid kokku: {kokku()} tk</div>
    <br></br>
    <br></br>

       <label>Lisa nimi: </label>
        <input ref={nimiRef}></input>
        <button onClick={lisa}>Lisa</button>
        

    <br></br>
    <br></br>


        <span>Sorteeri: </span>
        <button onClick={sorteeriZA}>Z-A</button>

    <br></br>

        <span>Filtreeri: </span>
        <button onClick={algavadMTahega}>M tähega algavad</button>
        <button onClick={kuueKohalised}>Kuue kohalised</button>
        <button onClick={loppebYTahega}>Y tähega lõppevad</button>



    <br></br>
    <br></br>

    <table>
        <thead>
            <tr>
                <th>Nimi</th>
                <th>Est</th>
                <th>Kustuta</th>
            </tr>
        </thead>
        <tbody>
        {nimed.map((nimi, index) => 
        <tr key={index}>
            <td>{nimi}</td> 
            <td>EST</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
        </tr>)}
        </tbody>
    </table>
    </div>
  )
}

export default TagasisideAndjad