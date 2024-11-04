import React, {useState, useRef} from 'react'

function HaldaEsindused() {          // jrk. nrid:     0            1               2           3           4           5                      
    const [esindused, muudaEsindused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
    const esindusRef = useRef();

function kustutaEsimene() {
    esindused.splice(0, 1); // .splice --> kustutamiseks
                    // nr 0 tähendab mitmendat järjekorras
                    // nr 1 tähendab mitu tükki alates sellest elemendist
    muudaEsindused(esindused.slice()); // sama, mis .sort() järgselt
                    // uuendab HTMLi, pannes uuendatud esindused 'esindused' muutuja peale
}

function kustutaTeine() {
    esindused.splice(1, 1);
    muudaEsindused(esindused.slice());
}

function kustutaKolmas() {
    esindused.splice(2, 1);
    muudaEsindused(esindused.slice());
}

function kustuta(index) {
    esindused.splice(index, 1)
    muudaEsindused(esindused.slice())
}

function lisaEsindus() {
    esindused.push(esindusRef.current.value);
    muudaEsindused(esindused.slice());
    esindusRef.current.value = "";
}

    return (
    <div>
    <br></br>

        <label>Esindus</label>
        <input ref={esindusRef} type="text"></input> <br></br>
        <button onClick={lisaEsindus}>Lisa</button>

    <div>Kokku esindusi: {esindused.length} tk</div>

        {esindused.length > 0 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
        {esindused.length > 1 && <button onClick={kustutaTeine}>Kustuta teine</button>}
        {esindused.length > 2 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}

    <table>
        <thead>
          <tr>
            <th>Esindus</th>
            <th>Ksututa</th>
          </tr>
        </thead>
        <tbody>
            {esindused.map((esindus, index) =>
             <tr key={index}>
                <td>{esindus}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
    </table>

    </div>
  )
}

export default HaldaEsindused