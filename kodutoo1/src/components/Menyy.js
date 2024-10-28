import React from 'react';
import { Link } from 'react-router-dom';

function Menyy() {
  return (
    <div>
       <Link to="/">
     <button className="nupp">Avaleht</button>
     </Link>
    
     <Link to="/meist">
     <button className="nupp">Meist</button>
     </Link>

     <Link to="/kontakt">
     <button className="nupp">Kontakt</button>
     </Link>
    
     <Link to="/seaded">
     <button className="nupp">Seaded</button>
     </Link> 

     <Link to="/naide">
     <button className="nupp">Näide</button>
     </Link>

     <Link to="/loader">
     <button className="nupp">Loader</button>
     </Link>
    </div>
    
  )
}

export default Menyy