$(document).ready(function () {

    $('#mobile-manu-active').meanmenu({
        meanMenuContainer: '.mobile-manu',
        meanScreenWidth: "767",
    });

    $('.ads_active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


})
