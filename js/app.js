$(document).ready(function(){

    AOS.init({
        once: true,
        disable: 'mobile'
    });

    $(".upside_section").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });



});