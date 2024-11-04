import React, { useState } from 'react'

function Books() {
    const [books, muudaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Defy Me", "The Ballad of Songbirds and Snakes"]);
    
            // SORTEERIMINE

function sorteeriAZ() {
    books.sort((a, b) => a.localeCompare(b, "et"))
    muudaBooks(books.slice())
}

function sorteeriZA() {
    books.sort((a, b) => b.localeCompare(a, "et"));
    muudaBooks(books.slice())
}

function sorteeriPikkus() {
    books.sort((a, b) => a.length - b.length);
    muudaBooks(books.slice())
}

function sorteeri2Taht() {
    books.sort((a, b) => a[1].localeCompare(b[1]));
    muudaBooks(books.slice())
}

function sorteeriSonadeArv() {
     books.sort((a, b) => a.split(" ").length-b.split(" ").length);
        muudaBooks(books.slice());
}

function sorteeriEelviimane() {
    books.sort((a, b) => a[a.length-2].localeCompare(b[b.length-2]), "");
    muudaBooks(books.slice());
}

            // FILTREERIMINE

function filtreeriThe() {
    const vastus = books.filter(book => book.startsWith("The"));
    muudaBooks(vastus);
}

function filtreeriAnd() {
    const vastus = books.filter(book => book.includes("and"));
    muudaBooks(vastus);
}

function filtreeri10() {
    const vastus = books.filter(book => book.length >= 10);
    muudaBooks(vastus);
}

function filtreeri7() {
    const vastus = books.filter(book => book.length <= 7);
    muudaBooks(vastus);
}

function filtreeri3Sonalised() {
    const vastus = books.filter(book => book.split(" ").length >=3);
    muudaBooks(vastus);
}

function filtreeriEelviimaneTahtC() {
    const vastus = books.filter(book => book[book.length - 2] === "c");
        muudaBooks(vastus);
}

function reset() {
muudaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Defy Me", "The Ballad of Songbirds and Snakes"]);
}

    return (
    <div>Books:
    <br></br>
    
    <div>
    <span>Sorteeri: </span>
    <button onClick={sorteeriAZ}>A-Z</button>
    <button onClick={sorteeriZA}>Z-A</button>
    <button onClick={sorteeriPikkus}>Pikkus</button>
    <button onClick={sorteeri2Taht}>Teine täht A-Z</button>
    <button onClick={sorteeriSonadeArv}>Sõnade arv</button>
    <button onClick={sorteeriEelviimane}>Eelviimane täht</button>
    </div>

    <br></br>

    <div>
    <span>Filtreeri: </span>
    <button onClick={filtreeriThe}>"The"ga algavad</button>
    <button onClick={filtreeriAnd}>Sõnade keskel "and"</button>
    <button onClick={filtreeri10}>Tähemärkidega üle 10</button>
    <button onClick={filtreeri7}>Tähemärkidega vähem kui 7</button>
    <button onClick={filtreeri3Sonalised}>Kolme või rohkema sõnalised</button>
    <button onClick={filtreeriEelviimaneTahtC}>Eelviimane täht on "c"</button>
    </div>

    <button onClick={reset}>Tühjenda filtrid</button>

    <br></br>
    <br></br>

        {books.map(book => <div>{book}</div>)}
    </div>
  )
}

export default Books