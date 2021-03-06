$(document).ready(function () {
    function getbeers() {
        $.ajax({
            type: 'GET',
            url: '/api/beers',
            success: function(data) {
                $.each(data, function(i, item){
                    $('#beersloader').append(`<div class=" mt-3 mr-5"><div class="mt-3 beercard card" style="width: 18rem;"><div class="card-body"><h3 class="card-title">${item.name}</h3><h6>${item.brewer_name}</h6><hr><p>${ item.style}</p><div class="card-inset"><p class="card-text mt-1">IBU: ${item.ibu}'</p><p class="card-text mt-1">ABV: ${item.abv}'</p></div><a href="/beer/${item.id}" class="btn more-button">More</a></div></div></div>`);
                });
            }
        });
    };
    function getbrewers() {
        $.ajax({
            type: 'GET',
            url: '/api/brewers',
            success: function(data) {
                console.log(data);
                $.each(data, function(i, item){
                    $('#brewersloader').append(`<div class="card brewercard mt-3 mr-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${item.name}</h5><p> Founded: ${item.founded}</p><hr><p>${item.address}</p><p>${item.phone}</p><p class="card-text">${item.phone}</p><p class="card-text"><a href="${item.website}">${item.website}</a></p><a href="/brewer/${item.id}" class="btn btn-warning">More</a></div></div>`);
                });
            }
        });
    };
    function getbeerscarousel() {
        $.ajax({
            type: 'GET',
            url: '/api/beers',
            success: function(data) {
                set = [];
                for (var i = 0; i < 5 ; i++) {
                    set.push(data[i]);
                }
                set1 = [set[0]];
                set2 = [];
                for (var i = 1; i < 5 ; i++) {
                    set2.push(data[i]);
                }
                $.each(set1, function(i, item){
                    $('.carousel-inner').append('<div class="carousel-item active"><div class="card"><div class="card-body"><h4 class="card-title">' + item.name + '</h4><h5 class="card-title">' + item.brewer_name +'</h5><h6 class="text-muted card-subtitle mb-2">' + item.style + '</h6><p class="carousel-text">' + item.description + '</p></div></div></div>');
                });
                $.each(set2, function(i, item){
                    $('.carousel-inner').append('<div class="carousel-item"><div class="card"><div class="card-body"><h4 class="card-title">' + item.name + '</h4><h5 class="card-title">' + item.brewer_name +'</h5><h6 class="text-muted card-subtitle mb-2">' + item.style + '</h6><p class="carousel-text">' + item.description + '</p></div></div></div>');
                });
            }
        });
    };


    var pathname = window.location.pathname;
	$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    getbrewers();
    getbeers();
    getbeerscarousel();
});

