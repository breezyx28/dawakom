$(function() {
    'use strict'
    var winH = $(window).height(),
        navbar = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winH - navbar);





    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.button_top').fadeIn(200);
        } else {
            $('.button_top').fadeOut(200);
        }
    });


    $('.button_top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })



    $(document).ready(function() {

        $("a").on('click', function(event) {

            if (this.hash !== "") {

                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    window.location.hash = hash;
                });
            }
        });


    });



});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "قراءة أقل";
        moreText.style.display = "inline";
    }
}