//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Kalkulaator from './pages/Kalkulaator';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">

<Link to="/">
    <img className="pilt" src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" alt="kassi pilt" />
    </Link>

    <Link to="/esindused">
     <button className="nupp">Esindused</button>
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

    {/* localhost:3000/esindused <div>10 esindust</div>
    localhost:3000/osta-kinkekaart <div>Kinkekaardi ostmine</div> 
    */}

    <Routes>
    <Route path="" element={ <Avaleht /> } />
      <Route path="esindused" element={ <Esindused /> } />
      <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
      <Route path="ostukorv" element={ <Ostukorv /> } />
      <Route path="lisa-toode" element={ <LisaToode /> } />
      <Route path="seaded" element={ <Seaded /> } />
      <Route path="kalkulaator" element={ <Kalkulaator /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>

    </div>
  );
}

export default App;
