$(function() {

    $("#my-menu").mmenu({
        extensions: ['theme-black', "effect-menu-slide", "pagedim-black"],
        navbar: {title: "<img src='img/logo-1.svg' alt='Салон красоты Смитлер'>"},
        offCanvas: {position: "right"}
    });

    var apiMmenu = $("#my-menu").data("mmenu");
    apiMmenu.bind("opened", function() {
        $(".hamburger").addClass("is-active");
    }).bind("closed", function() {
        $(".hamburger").removeClass("is-active");
    })

});
