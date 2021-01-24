// const searchButton = document.querySelector('#search-button');
// searchButton.addEventListener('click', function(){
//     const searchInput = document.querySelector('#search-input');
//     fetch('http://www.omdbapi.com/?apikey=ee23d2e8&s=' + searchInput.value)
//     .then(response => response.json())
//     .then(response => { 
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         const movieContainer = document.querySelector('#movie-list');
//         movieContainer.innerHTML = cards;

//         const modalDetailButton = document.querySelectorAll('.see-detail');
//         modalDetailButton.forEach(btn =>{
//             btn.addEventListener('click', function(){
//                 const imdbId = this.dataset.id;
//                 fetch('http://www.omdbapi.com/?apikey=ee23d2e8&i=' + imdbId)
//                 .then(response => response.json())
//                 .then(m => {    
//                     const movieDetail = showMovieDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 })
//             });
//         });
//     });
// });

const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', async function(){
    const searchInput = document.querySelector('#search-input');
    const movies = await getMovies(searchInput.value);
    updateUI(movies);
});

// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('see-detail'))
    {
        const imdbId = e.target.dataset.id;
        const movieDetail = await getMovieDetail(imdbId);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbID){
    return fetch('http://www.omdbapi.com/?apikey=ee23d2e8&i=' + imdbID)
    .then(response => response.json())
    .then(m=>m);
}

function updateUIDetail(movieDetail){
    const movieDetailEl = showMovieDetail(movieDetail);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetailEl;;
}

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=ee23d2e8&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('#movie-list');
    movieContainer.innerHTML = cards;
}
function showMovieDetail(m){
    console.log(m);
    return ` <p id="movie-name">${m.Title}</p>
    <p id="movie-description">${m.Plot}</p>`
}

function showCards(m){
    return ` <div class = "col-md-4"> 
    <div class="card mb-3" style="width: 18rem;">
        <img class="card-img-top" src="`+m.Poster+`" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">`+m.Title+`</h5>
            <h6 class = "card-subtitle mb-2 text-muted" >`+m.Year+`</h6>
            <a  data-toggle="modal" data-target="#exampleModal" data-id="`+m.imdbID+`" class="card-link see-detail">See Detail</a>
        </div>
    </div>
</div>`
}