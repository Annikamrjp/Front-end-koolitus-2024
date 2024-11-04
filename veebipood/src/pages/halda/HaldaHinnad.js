import React, {useState, useRef} from 'react'

function HaldaHinnad() {
    const [hinnad, muudaHinnad] = useState([45, 9, 80, 123, 1000, 51, 77, 321, 91, 23]);
    const hindRef = useRef();

    function kustuta(index) {
        hinnad.splice(index, 1);
        muudaHinnad(hinnad.slice())
    }

    function lisa() {
        hinnad.push(hindRef.current.value);
        muudaHinnad(hinnad.slice());
        hindRef.current.value = "";
    }
  
    return (
    <div>
        <label>Uus number</label> <br></br>
        <input ref={hindRef} type="text"></input> <br></br>
        <button onClick={lisa}>Sisesta</button> <br></br>

      <br></br>
        <table>
            <thead>
                <tr>
                    {/* <th>Index</th>
                    <th>Jrknr</th> */}
                    <th>Hind</th>
                    <th>Kustuta</th>
                    </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                <tr key={index}>
                    {/* <td>{index}</td> */}
                    {/* <td>{index + 1}</td> tavapärane järjekord*/}
                    <td>{hind}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad