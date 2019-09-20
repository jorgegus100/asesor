$(document).ready(function () {
    var $main = $(".central-screen");
    var $section = $(".screens");

    $(".navbar li.nav-item").click(function (e) {
        e.preventDefault();
        $section.hide();
        var target = $(this).data('target');
        if(target){
            $section.filter(target).show();
        }
        $("li").removeClass("active");
        $(this).addClass("active");
    });
    $(".btn-ases").click(function (e){
        e.preventDefault();
        $section.hide();
        $("#servicios").show();
    });
    $("#btn-search").click(function (e){
        e.preventDefault();
        $section.hide();
        $("#busqueda").show();
    });

    function initMap() {
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      };

});