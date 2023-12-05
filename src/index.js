
const movieItemNavElement = document.getElementById('movie-list')

const movieTitle = document.querySelector('#title')
const movieYear = document.querySelector('#year-released')
const movieDescription = document.querySelector("#description")
const movieImage = document.querySelector('#detail-image')
const movieWatched = document.querySelector('#watched')
const movieBlood = document.querySelector('#amount')

let currentMovie

const bloodForm = document.querySelector('#blood-form')
const bloodAmount = document.querySelector('#blood-amount')

fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(movieData => {
    movieData.map(movie =>{
       showMovies(movie)
      
       
    })
    showMovieDetails(movieData[0])
toggleWatchedButton()
addBloodAmount()

})








function showMovies(movie){
    addImageElement = document.createElement('img')
    addImageElement.src = movie.image
    movieItemNavElement.appendChild(addImageElement)
    addImageElement.addEventListener('click', () =>{
        showMovieDetails(movie)
    
    }) 
    }

function showMovieDetails(movies){
    currentMovie = movies
    movieTitle.textContent = movies.title
    movieYear.textContent = movies.release_year
    movieDescription.textContent = movies.description 
    movieImage.src = movies.image 
    movieWatched.textContent = movies.watched ? "watched":"unwatched"
    movieBlood.textContent = movies.blood_amount
}

function toggleWatchedButton(){
    movieWatched.addEventListener('click', () =>{
        currentMovie.watched = !currentMovie.watched
    movieWatched.textContent = currentMovie.watched ? "watched":"unwatched"

    })

}

function addBloodAmount(){
bloodForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    //let newBloodAmount = event.target['blood-amount'].value
   // console.log(currentMovie.blood_amount)
    
    if (parseFloat(bloodAmount.value) > 0 || (parseFloat(bloodAmount.value) < 0)){
    currentMovie.blood_amount += parseFloat(bloodAmount.value)
    showMovieDetails(currentMovie)
    }
    event.target['blood-amount'].value = ""
    event.target.reset()
})

}

// grab input value
// grab current movie blood amount 
// add them together
// replace current blood ammount with something 
// empty form input 