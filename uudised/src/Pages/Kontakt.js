import React from 'react'

function Kontakt() {
  return (
    <div>
        <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
        <div className="pealkiri">Võta meiega ühendust:</div>
        <br></br>
        <div className="keskus">Kristiine keskus</div>
        <div>+351231231</div>
        <div>Endla 45</div>

        <br></br>
        <div className="keskus">Ülemiste keskus</div>
        <div>+34151231</div>
        <div>Suur-Sõjamäe 4</div>

        <br></br>
        <div className="keskus">Tasku keskus</div>
        <div>+39312323</div>
        <div>Turu 2</div>  
    </div>
  );
}

export default Kontakt