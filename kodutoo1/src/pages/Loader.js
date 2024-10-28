import React from 'react';
import { useState } from 'react';

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true);
  return (
    <div>
        { kasLaeb === true && <div class="lds-heart"><div></div><div></div></div>}
        <br></br>
        <button onClick={() => uuendaLaadimist(false)}>Lõpeta laadimine</button>
    </div>
  )
}

export default Loader