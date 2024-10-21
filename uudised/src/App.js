
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import UudisteLeht from './Pages/UudisteLeht';
import Kontakt from './Pages/Kontakt';
import Meist from './Pages/Meist';

function App() {
  return (
    <div className="koik">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste leht</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }></Route>
        <Route path="uudised" element={ <UudisteLeht />}></Route>
        <Route path="kontakt" element={ <Kontakt />}></Route>
        <Route path="meist" element={ <Meist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
