import React from 'react';
import { Link } from 'react-router-dom';

function Menyy() {
  return (
    <div>
      <br></br>

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

     <Link to="/months">
     <button className="nupp">Kuud</button>
     </Link>

     <Link to="/animals">
     <button className="nupp">Loomad</button>
     </Link>

     <Link to="/words">
     <button className="nupp">Sõnad</button>
     </Link>

     <Link to="/books">
     <button className="nupp">Raamatud</button>
     </Link>

     <Link to="/numbrid">
     <button className="nupp">Numbrid</button>
     </Link>
    </div>
    
  )
}

export default Menyy