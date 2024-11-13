import React, { useState } from 'react'

function Avaleht() {
    const tegelased = [{nimi1: "Mickey", nimi2: "Mouse", koht:"Disneyland"},
                       {nimi1: "Minnie", nimi2: "Mouse", koht:"Disneyland"},
                       {nimi1: "Winnie", nimi2: "Pooh", koht:"Hundred Acre Wood"},
                       {nimi1: "Roo", nimi2: "Kangaroo", koht:"Hundred Acre Wood"},
                       {nimi1: "Scooby", nimi2: "Doo", koht:"Crystal Cove"},
    ]

    const [klikitudNimi, uuendaKlikitudNimi] = useState();

    const kuvaNimi = (tegelane) => {
        console.log(tegelane.nimi1);
        uuendaKlikitudNimi(tegelane.nimi1);
    }

  return (
    <div>

        {klikitudNimi !== "" && <div>Valisid tegelase: {klikitudNimi}</div>}

    <br></br>

        {tegelased.map(tegelane => <div>
            <div>{tegelane.nimi1}</div>
            <div>{tegelane.nimi2}</div>
            <div>{tegelane.koht}</div>
            <button onClick={() => kuvaNimi(tegelane)}>Vali tegelane</button>
        </div>)}

        {/* <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>

        <div>
            <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>

        <div>
            <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
        </div>

        <div>
            <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
        </div>

        <div>
            <div>Scooby</div>
            <div>Doo</div>
            <div>Crystal Cove</div>
        </div> */}
    </div>
  )
}

export default Avaleht