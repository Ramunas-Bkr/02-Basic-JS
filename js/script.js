/* Užduotis:

1) Pašalinti visus reklaminius blokus (pslp dešinėje)

2) Pakeisti filmo žanrą iš komedijos į dramą,

3) Pakeisti posterio galinį foną į paveiksliuką "bg.jpg". Jis yra folderyje img.
Naudoti tik js

4) Filmų sąrašą pslp suformuoti iš duomenų šiame JS faile.
Surūšiuoti pagal abėcėlę

5) Pridėti įvestų filmų numeraciją */

'use strict';

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La la Land",
        "Whiplash",
        "Scott Pilgrim vs. the World"
    ]
};

const adverBlocks = document.querySelectorAll('.promo__adv img');

adverBlocks.forEach(item => {
    item.remove();
});

document.querySelector('.promo__content > .promo__bg > .promo__genre').textContent = 'DRAMA';

document.querySelector('.promo__content > .promo__bg').style.backgroundImage = "url(img/bg.jpg)";

const moviesListInHtml = document.querySelectorAll('.promo__interactive-item');

moviesListInHtml.forEach(item => {
    item.remove();
});

const moviesList = movieDB.movies.sort();
let addHtml = '';

for (let i = 0; i < moviesList.length; i++) {
    addHtml += `<li class="promo__interactive-item">${i + 1}. ${moviesList[i]}
            <div class="delete"></div>
        </li>
    `;
}

document.querySelector('.promo__interactive-list').innerHTML = addHtml;