
const scrollToDiv = (toClass) => {
    $('html,body').animate({
        scrollTop: $('.' + toClass).offset().top
    },
        'slow');
}

const showMenu = () => {
    var menu = document.getElementById("menu_container")
    var body = document.getElementById("body")
    var overflow = document.getElementById("overflow")
    menu.classList.toggle('active')
    overflow.classList.toggle('active')
    body.classList.toggle('no_scroll')
}

const scrollToMobDiv = (toClass) => {

    var menu = document.getElementById("menu_container")
    var body = document.getElementById("body")
    var overflow = document.getElementById("overflow")
    menu.classList.toggle('active')
    overflow.classList.toggle('active')
    body.classList.toggle('no_scroll')

    $('html,body').animate({
        scrollTop: $('.' + toClass).offset().top
    },
        'slow');
}