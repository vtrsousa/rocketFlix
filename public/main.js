const API_KEY = 'api_key=24960283c73951975212750ea1c8f70a'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

async function getMovies(url){

    axios.get(url).then(res => {
        const data = res.data
        showMovies(data.results)
    })
    .catch(error => console.log(error))

}

function showMovies(data) {

    const buttonRandom = document.querySelector('.buttonRandom'),
        imgPoster = document.querySelector('.imgMovie img'),
        titleMovie = document.querySelector('.titleMovie'),
        overviewMovie = document.querySelector('.overviewMovie')

    buttonRandom.addEventListener('click', function () {
        const movieRandom = Math.floor(Math.random() * 30)

        try{
            data.forEach(() => {  
                const {title, overview, poster_path, vote_average} = data[movieRandom]
    
                imgPoster.src = `${IMG_URL + poster_path}`
                imgPoster.title = `${title}`
                titleMovie.innerText = `${title}`
                overviewMovie.innerText = `${overview}`.substring(0,200) + ' ...'
            })
        }catch(error){
            imgPoster.src = 'assets/posterError.png'
            imgPoster.title = 'erro'
            titleMovie.innerText = 'Opa, infelizmente ocorreu um erro, tente novamente.'
            overviewMovie.innerText = ' '
        }
    })
}

getMovies(API_URL)