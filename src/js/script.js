$(document).ready(function(){
    $('#slickSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500
    });

    $('#burger_menu').click(function() {
        $('body').css('overflow', 'hidden');
        $('.mobile_menu').css('left', '0');
    })

    $('#close').click(function() {
        $('body').css('overflow', 'inherit');
        $('.mobile_menu').css('left', '-100%');
    })
});

