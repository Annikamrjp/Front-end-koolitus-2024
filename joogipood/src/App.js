import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Lisa from './pages/Lisa';
import Halda from './pages/Halda';

function App() {
  return (
    <div className="App">

    <Link to="/">
    <button>Avaleht</button>
    </Link>

    <Link to="/lisa">
    <button>Lisa jooke</button>
    </Link>

    <Link to="/halda">
    <button>Halda jooke</button>
    </Link>

      <Routes>
        <Route path="" element={<Avaleht />}></Route>
        <Route path="lisa" element={<Lisa />}></Route>
        <Route path="halda" element={<Halda />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
