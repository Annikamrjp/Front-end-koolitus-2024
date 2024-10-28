import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata!");
  return (
    <div>

  <div className="tekst">Courses I have done:</div>
  <div className="rectangle"></div>

 
  <button className={kursus === "udemy" ? "kursus-aktiivne" : "kursus"} onClick={() => uuendaKursus("udemy")}>Udemy</button>
  <button className={kursus === "coursera" ? "kursus-aktiivne" : "kursus"} onClick={() => uuendaKursus("coursera")}>Coursera</button>
  <button className={kursus === "codecademy" ? "kursus-aktiivne" : "kursus"} onClick={() => uuendaKursus("codecademy")}>Codecademy</button>
  <button className={kursus === "udacity" ? "kursus-aktiivne" : "kursus"} onClick={() => uuendaKursus("udacity")}>Udacity</button>
  {kursus === "udemy" && <div className="courses-tekst">Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
  {kursus === "coursera" && <div className="courses-tekst">Siin on kirjeldus (loend) Coursera.org läbitud kursustest</div>}
  {kursus === "codecademy" && <div className="courses-tekst">Siin on kirjeldus (loend) Codecademy.com läbitud kursustest</div>}
  {kursus === "udacity" && <div className="courses-tekst">Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}

<br></br>
<br></br>

        <Link to="/" className="nupulink">
        <button className="nupp">Back</button>
        </Link>
       
    </div>
  )
}

export default Courses