$('#search-button').on('click', function(){
    searchMovie();
});

$('#search-input').on('keyup', function(e){
    if(e.which === 13){
        searchMovie();
    }
});

function searchMovie(){
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'ee23d2e8',
            's': $('#search-input').val()
        },
        success:function(result){
            if(result.Response == "True"){
                let movies = result.Search;
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class = "col-md-4"> 
                        <div class="card mb-3" style="width: 18rem;">
                            <img class="card-img-top" src="`+data.Poster+`" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">`+data.Title+`</h5>
                                <h6 class = "card-subtitle mb-2 text-muted" >`+data.Year+`</h6>
                                <a  data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID+`" class="card-link see-detail">See Detail</a>
                            </div>
                        </div>
                    </div>`);
                });
               
            }else{
                $('#movie-list').html(`<div class = "col">
                                        <h1 class = "text-center">` 
                                        + result.Error +
                                         `</h1>
                                         </div>`);
            }
            $('#search-input').val('');
        }
    });
}

$('#movie-list').on('click', '.see-detail',function(){
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'ee23d2e8',
            'i': $(this).data('id')
        },
        success:function(result){
            if(result.Response == "True"){
                console.log(result);
                $('#movie-name').html(result.Title);
                $('#movie-description').html(result.Plot);
               
               
            }else{
             
            }
          
        }
    });
});