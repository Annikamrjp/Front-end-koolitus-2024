import React from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <div>

  <div className="tekst">Courses I have done:</div>
  <div className="rectangle"></div>

        <Link to="/" className="nupulink">
        <button className="nupp">Back</button>
        </Link>
       
    </div>
  )
}

export default Courses