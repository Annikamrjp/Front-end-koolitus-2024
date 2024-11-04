import React, {useState} from 'react';

function Tagasiside() {
    const [tagasisided, uuendaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])

  return (
    <div>Tagasisided:
    {tagasisided.map(tagasiside => <div>{tagasiside}</div>)}
    </div>
  )
}

export default Tagasiside