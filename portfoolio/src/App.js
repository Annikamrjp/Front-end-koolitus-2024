
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';


function App() {
  return (
    <div>

<div>
<img className="avalehepilt" src="https://st.depositphotos.com/1043957/2468/i/450/depositphotos_24680975-stock-photo-computer-code.jpg" alt="avalehe pilt"></img>
    
<Routes>
    <Route path="" element={ <Avaleht /> }></Route>
    <Route path="work" element={ <Work /> }></Route>
    <Route path="hobbies" element={ <Hobbies /> }></Route>
    <Route path="courses" element={ <Courses /> }></Route>
  </Routes>



 

  

  

    </div>

    </div>
  );
}

export default App;
