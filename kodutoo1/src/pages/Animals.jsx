import React, { useState} from 'react'

function Animals() {
    const [animals, muudaAnimals] = useState(["pigs", "goats", "sheep"]);

function reset() {
  muudaAnimals([]);
  }


  return (
    <div>Animals:
        {animals.map(animal => <div>{animal}</div>)}

        <br></br>

        { animals.length === 0 && <div>Loomi pole</div>}
        <button onClick={reset}>Tühjenda</button>
    </div>
  )
}

export default Animals