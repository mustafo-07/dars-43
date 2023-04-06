const myBox = document.querySelector('.box');
let serchUrl = `https://restcountries.com/v3.1/name/`;
let AIP = 'https://restcountries.com/v3.1/all'
const serchInp = document.querySelector('serch');
const serchBtn = document.querySelector('btn');


fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => {
    // const serchItem = serchInp.value;


    // if (serchItem) {
    //     AIP = `${serchUrl}${serchItem}`
    // } else {
    //     AIP = 'https://restcountries.com/v3.1/all'
    // }

    data.map((country) => {



        const countryFlag = document.createElement('img');
        countryFlag.src = `${country.flags.png}`;
        countryFlag.alt = `${country.flags.alt}`;

        myBox.appendChild(countryFlag);

        const countryName = document.createElement('h2');
        countryName.textContent = `NAME :   s${country.name.common}`;

        myBox.appendChild(countryName);

        const countryContinent = document.createElement('h5');
        countryContinent.textContent = `cauntriy : ${country.continents}`;

        myBox.appendChild(countryContinent);

        const popStrtext = document.createElement("h4")
        const toStringPopulation = String(country.population);


        const currencies = document.createElement("h4");
        if (country.currencies !== null && country.currencies !== undefined) {

            const newCurrency = Object.keys(country.currencies);
            currencies.textContent = `currenciec: ${newCurrency[0]}`;
            myBox.appendChild(currencies);

        }


        if (toStringPopulation.length === 4) {
            popStrtext.textContent = `${toStringPopulation.slice(0,3)}k`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 5) {
            popStrtext.textContent = `${toStringPopulation.slice(0,3)}k`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 6) {
            popStrtext.textContent = `${toStringPopulation.slice(0,3)}k`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 7) {
            popStrtext.textContent = `${toStringPopulation.slice(0, 4)}m`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 8) {
            popStrtext.textContent = `${toStringPopulation.slice(0, 5)}mln`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 9) {
            popStrtext.textContent = `${toStringPopulation.slice(0, 6)}fitfilion`;
            myBox.appendChild(popStrtext)
        } else if (toStringPopulation.length === 10) {
            popStrtext.textContent = `${toStringPopulation.slice(0, 7)}fitfilion`;
            myBox.appendChild(popStrtext)
        } else {
            popStrtext.textContent = toStringPopulation;
            myBox.appendChild(popStrtext)
        }





    })
}).catch((error) => console.log(error.message));

// serchBtn.addEventListener('click', () => {

// })




// fetch('https://api.themoviedb.org/3/movie/550?api_key=1dd2e25b21b38701bef79b7830e73978').then((response) => response.json())
//     .then((data) => console.log(data))
//     //{
//     // data.results.map((movie) => {
//     //     const filmtitle = document.createElement('h2');
//     //     filmtitle.textContent = `${movie.original_title}`;
//     //     myBox.appendChild(filmtitle);
//     //     const filmlanguage = document.createElement('h3');
//     //     filmlanguage.textContent = `${movie.original_language}`;
//     //     myBox.appendChild(filmlanguage);
//     //     const img = document.createElement('img');
//     //     img.src = `${movie.backdrop_path}`;
//     //     myBox.appendChild(img);
//     //     const overview = document.createElement('p');
//     //     overview.textContent = `${movie.overview}`;
//     //     myBox.appendChild(overview);


// // })
// //})
// .catch((error) => console.log(error.message));