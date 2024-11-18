import React, { useRef, useState } from 'react';
import tootedFailist from '../../data/autod.json';
import {Link} from 'react-router-dom';
import ostukorvFailist from '../../data/ostukorv.json';
import { ToastContainer, toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

// {"nimi": "", "hind": 25000, "aktiivne": true, "pilt": ""}

function Tooted() {
  const { t } = useTranslation();
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const otsingRef = useRef();

  function otsi() {
    const vastus = tootedFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
    muudaTooted(vastus);
}

  function arvutaKokku() {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.nimi.length)
    return summa;
}

// Sorteeri

function sorteeriAZ() {
    tooted.sort((a, b) => a.nimi.localeCompare (b.nimi, "et"));
    muudaTooted(tooted.slice());
} 

function sorteeriZA() {
  tooted.sort((a, b) => b.nimi.localeCompare (a.nimi, "et"));
  muudaTooted(tooted.slice());
}

function sorteeriKasvavalt() {
  tooted.sort((a, b) => a.nimi.length - b.nimi.length);
  muudaTooted(tooted.slice());
}

function sorteeriKahanevalt() {
  tooted.sort((a, b) => b.nimi.length - a.nimi.length);
  muudaTooted(tooted.slice());
}

// Filtreeri

function algavadBga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
  muudaTooted(vastus);
}

function algavadNga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
  muudaTooted(vastus);
}

function algavadTga() {
  const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
  muudaTooted(vastus);
}

function reset() {
  muudaTooted(tootedFailist);
}

function lisaOstukorvi(toode) {
  ostukorvFailist.push(toode);
  toast.success("Toode on edukalt lisatud ostukorvi!");
}

  return (
    <div>
      {/* <h1>{t('Welcome to React')}</h1> */}
    <br></br>
 
        <TextField label="Otsi" onChange={otsi} inputRef={otsingRef} type="text"></TextField> <br></br>
      <br></br>

      <div>Täthti kokku kõikide toodete peale: {arvutaKokku()}</div>

      <br></br>

      <span>{t("sort-header")}</span>
      <Button onClick={sorteeriAZ}>{t("sort-az")}</Button>
      <Button onClick={sorteeriZA}>{t("sort-za")}</Button>
      <Button onClick={sorteeriKasvavalt}>Kasvavalt</Button>
      <Button onClick={sorteeriKahanevalt}>Kahanevalt</Button>

    <br></br>

      <span>Filtreeri: </span>
      <Button onClick={algavadBga}>B-ga algavad</Button>
      <Button onClick={algavadNga}>N-ga algavad</Button>
      <Button onClick={algavadTga}>T-ga algavad</Button>

    <br></br>
      <Button onClick={reset}>Tühjenda filtrid</Button>

    <br></br>
    <br></br>

      {tooted.map((toode, index) => 
      <div key={index}>
        <img className="toote-pilt" src={toode.pilt} alt=""></img>
        <div>{toode.nimi}</div>
        <div>{toode.hind}</div>
        {toode.aktiivne && <Button variant="contained" onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi 1</Button>}
        {/* <button disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi 2</button> */}

        <Link to={"/toode/" + index}>
        <Button variant="outlined">Vaata lähemalt</Button>
        </Link>
      </div>
      )}

<ToastContainer
      position="bottom-right"
      autoClose={3000}
      theme="dark" />

    </div>
  )
}

export default Tooted