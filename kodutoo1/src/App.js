import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Menyy from './components/Menyy';
import { useState } from 'react';
import { useRef } from 'react';
import Naide from './pages/Naide';
import Loader from './pages/Loader';



function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function logiSisse() {
    if(paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud"); }
    else {muudaSonum("Vale parool");}
  }

  function logiValja() {
    muudaSisselogitud("ei");
    muudaSonum("Oled Välja logitud");
  }

  return (
    <div className="App">

      <div>{sonum}</div>

    { sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br></br>
      <input ref={kasutajaNimiRef} type="text" ></input> <br></br>
      <label>Parool</label> <br></br>
      <input ref={paroolRef} type="password" ></input> <br></br>
    </div>}

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" &&<button onClick={logiValja}>Logi välja</button> }
<Menyy />

<Routes>
  <Route path="" element={ <Avaleht /> }></Route>
  <Route path="meist" element={ <Meist /> }></Route>
  <Route path="kontakt" element={ <Kontakt /> }></Route>
  <Route path="seaded" element={ <Seaded /> }></Route>
  <Route path="naide" element={ <Naide /> }></Route>
  <Route path="loader" element={ <Loader /> }></Route>

</Routes>
    
    </div>
  );
}

export default App;
