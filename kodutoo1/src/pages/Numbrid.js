import React, { useState } from 'react'

function Numbrid() {
    const [numbers, muudaNumbers] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135]);

         // SORTEERIMINE

function sorteeriKasvavalt() {
numbers.sort((a, b) => a -b)
muudaNumbers(numbers.slice());
}

function sorteeriKahanevalt() {
  numbers.sort((a, b) => b - a)
  muudaNumbers(numbers.slice());
  }

function sorteeriAZ() {
  numbers.sort((a,b) => a.toString().localeCompare(b.toString()))
  muudaNumbers(numbers.slice());
  }

function sorteeriZA() {
  numbers.sort((b,a) => a.toString().localeCompare(b.toString()))
  muudaNumbers(numbers.slice());
  }

          // FILTREERIMINE

function suuremadKui8() {
  const vastus = numbers.filter(e => e > 8);
  muudaNumbers(vastus);
  }

function vaiksemadKui10() {
  const vastus = numbers.filter(e => e < 10);
  muudaNumbers(vastus);
  }

function paarisarvud() {
  const vastus = numbers.filter(e => e % 2 === 0);
  muudaNumbers(vastus);
  }

function paaritudarvud() {
  const vastus = numbers.filter(e => e % 2 !== 0);
  muudaNumbers(vastus);
  }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function reset() {
  muudaNumbers([4, 23, 7, 39, 19, 0, 9, 14, 135]);
}

  return (
    <div>Numbrid:

    <br></br>

    <div>
        <span>Sorteeri: </span>
        <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Kahanevalt</button>
        <button onClick={sorteeriAZ}>A-Z</button>
        <button onClick={sorteeriZA}>Z-A</button>

      <br></br>

        <span>Filtreeri: </span>
        <button onClick={suuremadKui8}>Suuremad kui 8</button>
        <button onClick={vaiksemadKui10}>Väiksemad kui 10</button>
        <button onClick={paarisarvud}>Paarisarvud</button>
        <button onClick={paaritudarvud}>Paaritud arvud</button>
        <button >Algavad nr-ga 1</button>
        <button >Sisaldavad nr 3</button>

    </div>

    <br></br>
      <button onClick={reset}>Tühjenda filtrid</button>

    {numbers.map(number => <div>{number}</div>)}
    </div>
  )
}

export default Numbrid