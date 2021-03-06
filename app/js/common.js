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
    });

    $(".carousel-services").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ["<i class='fa fa-angle-double-left'></i>", "<i class='fa fa-angle-double-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this);
            var thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);
        });
    }carouselService();

});
