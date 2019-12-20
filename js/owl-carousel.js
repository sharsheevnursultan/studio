$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"],
    autoplay:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});