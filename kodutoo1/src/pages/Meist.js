import React from 'react';
import { useState } from 'react';

function Meist() {
  const [aadress, maaraAadress] = useState("Tallinn");
  const [telefon, maaraTelefon] = useState("5512345");
  const [email, maaraEmail] = useState("bla@baa.com");
  const [ingliseKeelne, maaraIngliseKeelne] = useState("ei")

  const [message, maaraMessage] = useState("Vali tegevus");

  function english() {
    maaraAadress("London");
    maaraTelefon("6612346");
    maaraEmail("bli@baa.com");
    maaraIngliseKeelne("jah");
  } 
  return (
    <div>
      { english && <div>{ aadress }</div>}
      <div>{ telefon }</div>
      <div>{ email }</div>



<button onClick={english}>Change to english</button>
{ ingliseKeelne === "jah" && <div>Page is in English</div>}

<br></br><br></br>

  <div>{message}</div>
    <button onClick={() => maaraMessage("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
    <button onClick={() => maaraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
    <button onClick={() => maaraMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>


    </div>
  )
}

export default Meist