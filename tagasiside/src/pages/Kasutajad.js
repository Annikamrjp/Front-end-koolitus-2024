import React, { useState } from 'react';
import kasutajadFailist from '../data/kasutajad.json'
;
function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist.slice())

function reset() {
    uuendaKasutajad(kasutajadFailist.slice());
} 

function usernameMoreThan10() {
    const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
    uuendaKasutajad(vastus);
}

// function firstIndex(kasutaja) {
//     const index = kasutajad.indexOf(kasutaja);
//     kasutajad.splice(index, 1);
//     uuendaKasutajad(kasutajad.slice());
// } //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function indexFromFirstUser() {
    const index = kasutajad.findIndex(kasutaja => kasutaja.email === "Lucio_Hettinger@annie.ca");
    alert(index);
} 

function nameStartsWithC() {
    const found = kasutajad.find(kasutaja => kasutaja.name.substring(0,1) === "C");
    alert(found.name);
} 

function sortByLat() {
    kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
    uuendaKasutajad(kasutajad.slice());
}

function lngPositive() {
    const vastus = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
    uuendaKasutajad(vastus);
}

function kokku() {
    let summa = 0;
    kasutajad.forEach(kasutaja => summa = summa + kasutaja.id);
    console.log(summa);
}

function addToPhoneNumber() {
const vastus = kasutajad.map(kasutaja => ({...kasutaja, phone: "000-"+kasutaja.phone}));
uuendaKasutajad(vastus);
 }

function replaceAllWithEmails() {
    const vastus = kasutajad.map(kasutaja => kasutaja.email);
    alert(vastus);
} 

function replaceCatchphraseLetters() {
    const vastus = kasutajad.map(kasutaja => (
        {...kasutaja, company: {...kasutaja.company, catchPhrase: kasutaja.company.catchPhrase.replaceAll("a", "e")}}
    ));
    uuendaKasutajad(vastus);
}

function deleter(index) {
    kasutajad.splice(index, 1);
    uuendaKasutajad(kasutajad.slice())
}

  return (
    <div>

        <div>{kasutajad.length}</div>
    <br></br>

        <button onClick={() => reset()}>Reset</button> <br></br>
        <button onClick={() => usernameMoreThan10()}>1. Username more than 10 letters</button>
        {/* <button onClick={() => firstIndex()}>2. Index of first</button> */}
        <button onClick={() => indexFromFirstUser()}>3. Index from first user</button>
        <button onClick={() => nameStartsWithC()}>4. First name starts with C</button>
        <button onClick={sortByLat}>5. Sort by lat</button>
        <button onClick={lngPositive}>6. Lng is positive</button>
        <button onClick={() => kokku()}>7. Sum</button>
        <button onClick={() => addToPhoneNumber()}>8. Add to phone number</button>
        <button onClick={() => replaceAllWithEmails()}>9. Replace with Emails</button>
        <button onClick={() => replaceCatchphraseLetters()}>10. Replace catchphrase letters</button>



    <br></br>
    <br></br>



        {kasutajad.map((kasutaja, index) => <div key="index">
            <div>
            <div>ID: {kasutaja.id}</div>
            <div>Name: {kasutaja.name}</div>
            <div>UserName: {kasutaja.username}</div>
            <div>Email: {kasutaja.email}</div>
            <div>Street:{kasutaja.address.street}</div>
            <div>Suite: {kasutaja.address.suite}</div>
            <div>City:{kasutaja.address.city}</div>
            <div>ZipCode:{kasutaja.address.zipcode}</div>
            <div>lat: {kasutaja.address.geo.lat}</div>
            <div>lng: {kasutaja.address.geo.lng}</div>
            <div>Phone: {kasutaja.phone}</div>
            <div>Company Name: {kasutaja.company.name}</div>
            <div>CatchPhrase: {kasutaja.company.catchPhrase}</div>
            <div>Bs: {kasutaja.company.bs}</div>

            <button onClick={() => deleter(index)}>2. Delete</button>
            <br></br>
            <br></br>

            </div>
        </div>)}
    </div>
  )
}

export default Kasutajad