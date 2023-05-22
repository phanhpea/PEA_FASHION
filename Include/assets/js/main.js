$('.owl-stage').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding:'0',
});

const next_dot = document.getElementById('next-dot');
const prev_dot = document.getElementById('prev-dot');
next_dot.onclick = function(){
    $('.owl-stage').slick('slickGoTo',6);
    next_dot.classList.add('change-color')
    prev_dot.classList.remove('change-color')
}
prev_dot.onclick = function(){
    $('.owl-stage').slick('slickGoTo',0);
    prev_dot.classList.add('change-color')
    next_dot.classList.remove('change-color')
}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 300) {
        $("header").addClass("fixed");
    }
    else{
        $("header").removeClass("fixed")
    }
} 
)