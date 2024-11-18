import React, {useState} from 'react';
import hinnadFailist from '../../data/hinnad.json';
import {Link} from 'react-router-dom';

//                                      .json on ainuke, millele peab laiendi lisama
// ./ --> samas kaustas
// ../ --> kausta võrra ülevalpool
// ../../ --> 2 kausta ülevalpool
// kui ei ole ühtegi punkti ees, siis võetakse node_modules seest

//teeme väljatõste andmete osas:
// 1. lühem -> muidu on liiga pikad read
// 2. saan taaskasutada -> kui muudan ühe korra, siis muutub kõikjal

function Hinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadFailist.slice());
    
        // sorteeri

    function sorteeriAZ() {
        hinnad.sort((a, b) => a.number.toString().localeCompare(b.number.toString(), "et"));
        muudaHinnad(hinnad.slice());
        // .slice() on vaja kui muudan array'd ja tahan, et see muutus ka HTMLs kajastuks
        // .slice() teeb koopia, võtab mälukoha ära, et React ei näeks seda samasugune kui originaal
    } 

    const sorteeriZA = () => {
        hinnad.sort((a, b) => b.number.toString().localeCompare(a.number.toString(), "et"));
        muudaHinnad(hinnad.slice());
    }

    const sorteeriKasvavalt = () => {
        hinnad.sort((a, b) => a.number - b.number);
        muudaHinnad(hinnad.slice());
    }

    const sorteeriKahanevalt = () => {
        hinnad.sort((a, b) => b.number - a.number);
        muudaHinnad(hinnad.slice());
    }

    function sorteeriTeineNrAZ() {
        hinnad.sort((a, b) => {
            const aStr = a.toString();
            const bStr = b.toString();
            const aSecond = aStr[1] || "0";
            const bSecond = bStr[1] || "0";

            return aSecond.localeCompare(bSecond, "et");
        });
        muudaHinnad(hinnad.slice());
    }

        // filtreeri
        
    function filtreeriVaiksemadKui50() {
    // kui siia vaja panna uus muutuja, millele võrdusmärgiga väärtus anda:
    // .slice() pole vaja
        const vastus = hinnadFailist.filter(hind => hind.number < 50);
        muudaHinnad(vastus);
    }

    function filtreeriSuuremadKui100() {
        const vastus = hinnadFailist.filter(hind => hind.number > 100);
        muudaHinnad(vastus);
    }

    function reset() {
        muudaHinnad(hinnadFailist.slice());
    }
    // reset kustutab ainult filtrid

    function arvutaKokku() {
        let summa = 0;
        // summa = summa + 45;
        // summa = summa + 9;
        // summa = summa + 80;

    // [45, 9, 80]
    //                  45  =>       =   0  +  45
    //                  9   =>   54  =  45   +  9
    //                  80  =>   134 =  54   +  80
        hinnad.forEach(hind => summa = summa + hind.number);
        return summa;
    }

    // const -> konstantne, teda ei saa enam võrdusmärgiga muuta
    // let -> muutmine on lubatud
    // var -> Reactis ei kasutata
  
    return (
    <div>
      <br></br>
        <div>Hinnad kokku: {arvutaKokku()}</div>

      <br></br>


       <span>Sorteeri: </span>
        <button onClick={sorteeriAZ}>A-Z</button>
        <button onClick={sorteeriZA}>Z-A</button>
        <button onClick={sorteeriKasvavalt}>Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Kahanevalt</button>
        <button onClick={sorteeriTeineNrAZ}>Teine nr A-Z</button>

      <br></br>
      <button onClick={filtreeriVaiksemadKui50}>Filtreeri väiksemad kui 50</button>
      <button onClick={filtreeriSuuremadKui100}>Filtreeri suuremad kui 100</button>


      <br></br>

      <button onClick={reset}>Tühjenda filtrid</button>

      <br></br>
      <br></br>

        {hinnad.map((hind, index) => <div key={index}>{hind.number}
           <Link to={"/hind/" + index}>
           <button>Vaata lähemalt</button>
           </Link> 
        </div>)}
    </div>
  )
}

export default Hinnad