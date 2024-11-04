import React, {useState} from 'react'

function Words() {
    const [words, muudaWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

function reset() {
muudaWords([]);
}

  return (
    <div>Words:
        {words.map(word => <div>{word}</div>)}

        <br></br>

        { words.length === 0 && <div>Sõnu pole</div>}
        <button onClick={reset}>Tühjenda</button>
    </div>
  )
}

export default Words