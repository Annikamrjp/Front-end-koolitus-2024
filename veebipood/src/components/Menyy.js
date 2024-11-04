import React from 'react';
import { Link } from 'react-router-dom';

function Menyy() {
  return (
    <div><Link to="/">
    <img className="pilt" src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" alt="kassi pilt" />
    </Link>
    
     <Link to="/osta-kinkekaart">
     <button className="nupp">Kinkekaart</button>
     </Link>

     <Link to="/ostukorv">
     <button className="nupp">Ostukorv</button>
     </Link>
    
     <Link to="/lisa-toode">
     <button className="nupp">Lisa toode</button>
     </Link>

     <Link to="/seaded">
     <button className="nupp">Seaded</button>
     </Link>

     <Link to="/kalkulaator">
     <button className="nupp">Kalkulaator</button>
     </Link>

     <br></br>
     <br></br>
     
     <Link to="/esindused">
     <button className="nupp">Esindused</button>
     </Link>

     <Link to="/hinnad">
     <button className="nupp">Hinnad</button>
     </Link>

     <Link to="/tootajad">
     <button className="nupp">Töötajad</button>
     </Link>

     <Link to="/Tooted">
     <button className="nupp">Tooted</button>
     </Link>

     <br></br>
     <br></br>


     <Link to="/halda-esindused">
     <button className="nupp">Halda esindused</button>
     </Link>

     <Link to="/halda-hinnad">
     <button className="nupp">Halda hinnad</button>
     </Link>

     <Link to="/halda-tootajad">
     <button className="nupp">Halda töötajad</button>
     </Link>

     <Link to="/halda-tooted">
     <button className="nupp">Halda tooted</button>
     </Link>
     </div>
  )
}

export default Menyy