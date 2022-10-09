// $('.single-item').slick();

$(document).on('ready', function () {
    $(".single-item").slick({
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
