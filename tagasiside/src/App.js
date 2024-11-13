import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div className="App">
      
      <Link to="/">
      <button>Avaleht</button>
      </Link>

      <Link to="/tagasiside">
      <button>Tagasiside</button>
      </Link>

      <Link to="/tagasisideandjad">
      <button>Tagasiside andjad</button>
      </Link>

      <Link to="/tegevused">
      <button>Tegevused</button>
      </Link>

      <Link to="/kasutajad">
      <button>Kasutajad</button>
      </Link>

      <Routes>
        <Route path="" element={<div>Tere</div>}></Route>
        <Route path="tagasiside" element={<Tagasiside />}></Route>
        <Route path="tagasisideandjad" element={<TagasisideAndjad />}></Route>
        <Route path="tegevused" element={<Tegevused />}></Route>
        <Route path="kasutajad" element={<Kasutajad />}></Route>
      </Routes>

    </div>
  );
}

export default App;
