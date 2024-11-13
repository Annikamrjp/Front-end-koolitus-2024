import React, {useState, useRef} from 'react';
import hinnadFailist from '../../data/hinnad.json';

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadFailist.slice());
    const hindRef = useRef();

    function kustuta(index) {
        hinnadFailist.splice(index, 1); // võtan failist ühe hinna vähemaks
        muudaHinnad(hinnadFailist.slice()); // aga uuendab failist
    }

    function lisa(event) {
        console.log(event)
        if (event.key !== "Enter" && event.type !== "click") {
            return;
        }
        hinnadFailist.push({"number": hindRef.current.value, "lisaja": "Sisselogitud_kasutaja"});
        muudaHinnad(hinnadFailist.slice());
        hindRef.current.value = "";
    }
  
    return (
    <div>
        <label>Uus number</label> <br></br>
        <input onKeyUp={lisa} ref={hindRef} type="text"></input> <br></br>
        <button onClick={lisa}>Sisesta</button> <br></br>

      <br></br>
        <table>
            <thead>
                <tr>
                    {/* <th>Index</th>
                    <th>Jrknr</th> */}
                    <th>Hind</th>
                    <th>Lisaja</th>
                    <th>Kustuta</th>
                    </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                <tr key={index}>
                    {/* <td>{index}</td> */}
                    {/* <td>{index + 1}</td> tavapärane järjekord*/}
                    <td>{hind.number}</td>
                    <td>{hind.lisaja}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad