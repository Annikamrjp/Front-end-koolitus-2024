import React, { useState } from 'react';
import tegevusedFailist from '../data/tegevused.json';

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedFailist)

function kokku() {
    let summa = 0
    tegevused.forEach(tegevus => summa = summa + tegevus.title.length);
    return summa;
}

function naitaKasutajaUks() {
    const vastus = tegevused.filter(tegevus => tegevus.userId === 1);
    uuendaTegevused(vastus);
}

function naitaKasutajaKaks() {
    const vastus = tegevused.filter(tegevus => tegevus.userId === 2);
    uuendaTegevused(vastus);
}

function naitaKasutajaKolm() {
    const vastus = tegevused.filter(tegevus => tegevus.userId === 3);
    uuendaTegevused(vastus);
}

function naitaValmisTegevused() {
    const vastus = tegevused.filter(tegevus => tegevus.completed === true);
    uuendaTegevused(vastus);
}

function naitaMitteValmisTegevused() {
    const vastus = tegevused.filter(tegevus => tegevus.completed === false);
    uuendaTegevused(vastus);
}

function naitaTgaAlgavad() {
    const vastus = tegevused.filter(tegevus => tegevus.title.startsWith("t"));
    uuendaTegevused(vastus);
}

function naita20RohkemTahemarke() {
    const vastus = tegevused.filter(tegevus => tegevus.title.length > 20);
    uuendaTegevused(vastus);
}

function naitaKoiki() {
    uuendaTegevused(tegevusedFailist);
}

  return ( <div>
    <br></br>
    <div>Tegevuste arv: {kokku()}</div>

    <button onClick={() => naitaKasutajaUks()}>Kuva kõik kasutaja ID 1 tegevused</button> <br></br>
    <button onClick={() => naitaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button> <br></br>
    <button onClick={() => naitaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button> <br></br>
    <button onClick={() => naitaValmisTegevused()}>Kuva kõik valmis tegevused</button> <br></br>
    <button onClick={() => naitaMitteValmisTegevused()}>Kuva kõik mittevalmis tegevused</button> <br></br>
    <button onClick={() => naitaTgaAlgavad()}>Kuva kõik "t" tähega algavad tegevused</button> <br></br>
    <button onClick={() => naita20RohkemTahemarke()}>Kuva tegevused, millel on tähemärke rohkem kui 20</button> <br></br>
    <button onClick={() => naitaKoiki()}>Kuva kõik tegevused tagasi</button> <br></br>


    <br></br>

        {tegevused.map(tegevus => 
        <div>
        <div>{tegevus.userId}</div> 
        <div>{tegevus.id}</div>
        <div>{tegevus.title}</div>
        <div>{tegevus.completed}</div>
        <br></br>
        </div>)}
    </div>
  )
}

export default Tegevused