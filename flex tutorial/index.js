$("#skillBtn").click(function () {
    $('html,body').animate({
        scrollTop: $("#skills").offset().top
    },
        'slow');
});
$("#educationBtn").click(function () {
    $('html,body').animate({
        scrollTop: $("#education").offset().top
    },
        'slow');
});
$("#projectBtn").click(function () {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top
    },
        'slow');
});