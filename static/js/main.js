$(document).ready(function () {
    function getbeers() {
        $.ajax({
            type: 'GET',
            url: '/api/beers',
            success: function(data) {
                $.each(data, function(i, item){
                    $('#beersloader').append('<div class="d-flex mr-5"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+ item.name +'</h5><h6>' + item.brewer + '</h6><p>' + item.style + '</p><p class="card-text">IBU: ' + item.ibu + '</p><p class="card-text">ABV: ' + item.abv + '</p></div></div></div>');
                });
            }
        });
    };
    function getbrewers() {
        $.ajax({
            type: 'GET',
            url: '/api/brewers',
            success: function(data) {
                $.each(data, function(i, item){
                    $('#brewersloader').append('<div class="d-flex justify-content-center"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+ item.name +'</h5><p>' + item.founded + '</p><p>' + item.address + '</p><p>' + item.email + '</p><p class="card-text">IBU: ' + item.phone + '</p><p class="card-text">ABV: ' + item.website + '</p></div></div></div>');
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
                    $('.carousel-inner').append('<div class="carousel-item active"><div class="card"><div class="card-body"><h4 class="card-title">' + item.name + '</h4><h5 class="card-title">' + item.brewer +'</h5><h6 class="text-muted card-subtitle mb-2">' + item.style + '</h6><p class="card-text">' + item.description + '</p></div></div></div>');
                });
                console.log(set2);
                $.each(set2, function(i, item){
                    $('.carousel-inner').append('<div class="carousel-item"><div class="card"><div class="card-body"><h4 class="card-title">' + item.name + '</h4><h5 class="card-title">' + item.brewer +'</h5><h6 class="text-muted card-subtitle mb-2">' + item.style + '</h6><p class="card-text">' + item.description + '</p></div></div></div>');
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

