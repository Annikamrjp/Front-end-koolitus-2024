import React from 'react';
import {useParams} from 'react-router-dom'; // URLga seotud asjad tulevad react-router-domist
import tootedFailist from '../../data/autod.json';

function YksToode() {
  // {} sulgude sisse läheb see, mis on selle faili URLs kooloni taga
  const {toodeIndex} = useParams(); // --> useParams võimaldab lugeda URLst parameetrit, mis on kooloni taga

  // Kuidas saada aru, mida loogeliste sulgude sisse panna?
  // 1. lähen App.js sisse
  // 2. Otsin selle failiga seotud URLi üles
  // 3. Vaatan, mis on kooloni taga

  // indexiga saab elemendi arrayst üles otsida:
  // array[index] --> see väljastab õige elemendi, kellel on selline index
  // const leitud = ["Nobe", "Saab", "Ford"][0];

  const leitud = tootedFailist[toodeIndex];



  return (
    <div>
      
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div>{leitud.aktiivne}</div>
      <img src={leitud.pilt} alt=""></img>

    </div>
  )
}

export default YksToode