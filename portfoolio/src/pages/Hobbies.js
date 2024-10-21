import React from 'react'
import { Link } from 'react-router-dom'

function Hobbies() {
  return (
    <div>

  <div className="tekst">My Hobbies:</div>
  <div className="rectangle"></div>

        <Link to="/" className="nupulink">
        <button className="nupp">Back</button>
        </Link>
        
    </div>
  )
}

export default Hobbies