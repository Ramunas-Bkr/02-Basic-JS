/* Užduotis Nr1:

1) Pašalinti visus reklaminius blokus (pslp dešinėje)

2) Pakeisti filmo žanrą iš komedijos į dramą,

3) Pakeisti posterio galinį foną į paveiksliuką "bg.jpg". Jis yra folderyje img.
Naudoti tik js

4) Filmų sąrašą pslp suformuoti iš duomenų šiame JS faile.
Surūšiuoti pagal abėcėlę

5) Pridėti įvestų filmų numeraciją */

// Užduotis Nr2

// 1) Realizuoti funkciją, kuri po formos užpildymo ir mygtuko paspaudimo "Patvirtinti",
// prideda naują filmą į sąrašą. Puslapis neturi persikrauti.
// Naujas filmas turi prisidėti į movieDB.movies

// 2.) Jeigu filmo pavadinime daugiau, nei 21 simbolis - apkirpti jį ir pridėti tris taškus.

// 3.) Paspaudus ant šiukšliadėžės - elementas turi būti pašalintas iš sąrašo (extra užduotis)

// 4.) Jeigu formoje pažymėta varnelė "Padaryti jį mėgstamiausiu?" - į konsolę išvesti pranešimą:
// "Pridėtas mėgstamiausias filmas"

// 5.) Filmai turi būti surūšiuoti pagal abėcėlę

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "logan",
            "justice League",
            "la la Land",
            "whiplash",
            "scott Pilgrim vs. the World"
        ]
    };

    const adverBlocks = document.querySelectorAll('.promo__adv img');
    const moviesList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector("form.add");
    const movieInput = addForm.querySelector(".adding__input");
    const checkBox = addForm.querySelector('[type="checkbox"]');

    const removeAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        document.querySelector('.promo__content > .promo__bg > .promo__genre').textContent = 'DRAMA';
        document.querySelector('.promo__content > .promo__bg').style.backgroundImage = "url(img/bg.jpg)";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    const sortAndShowMovies = (movies, parent) => {
        parent.innerHTML = '';
        movies.forEach((movie, i) => {
            if (movie.length > 21) {
                movie = `${movie.substring(0, 22)}...`;
            }
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}. ${movie}
                        <div class="delete"></div>
                </li> `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            });
        });
    };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = movieInput.value;
        let favorite = checkBox.checked;
        if (newFilm) {
            if (favorite) {
                console.log('Pridėtas mėgstamiausias filmas');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            sortAndShowMovies(movieDB.movies, moviesList);
            event.target.reset();
        } else {
            alert("You must write movie");
        }
    });

    removeAdv(adverBlocks);
    makeChanges();
    sortArr(movieDB.movies);
    sortAndShowMovies(movieDB.movies, moviesList);

});

