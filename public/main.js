const API_KEY = 'api_key=24960283c73951975212750ea1c8f70a'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

const main = document.getElementById('content')

function getMovies(url){
        
    fetch(url).then(res => res.json()).then(data => {

        const random = data.results.length

        console.log(data.results)

        showMovies(data.results)
        
    })
}

function showMovies(data) {

    main.innerHTML = ''

    const moviesEl = document.createElement('div')
    moviesEl.classList.add('movie')

    const buttonRandom = document.querySelector('.buttonRandom')

    buttonRandom.addEventListener('click', function () {
        const movieRandom = Math.floor(Math.random() * data.length + 1)

        data.forEach(() => {  
            
                const {title, overview, poster_path, vote_average} = data[movieRandom]

                console.log(vote_average)

                moviesEl.innerHTML = `
                    <div class="imgMovie">
                        <img class="imgPoster" src="${IMG_URL+poster_path}" alt="${title}">
                    </div>
                    <div class="descriptionMovie">
                        <h2 class="titleMovie">${title}</h2>
                        <p class="descriptionMovie">${overview}</p>
                    </div>
                `
                main.appendChild(moviesEl)
        })
    })
}

getMovies(API_URL)