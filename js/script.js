$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3500,
        pagination: false
    }); //Calling the superlides jquery function on the html element with id 'slides'

    var typed = new Typed(".typed", {
        strings: ["Computer Science Student.", "DEANS Scholar.", "Drone Pilot.", "Mechatronics Engineering Student."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 4,
        stagePadding: 15,
        smartSpeed: 550,
        fluidSpeed: 200,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4 
            }
        }
    })


    var skillsTopOffset = $('.skillsSection').offset().top; //get the top offset of the skillsSection element
    
    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) { //only starting the animation after the user has scrolled to the skills section. 
        //Explanation: The window.pageYOffset returns the current y offset value of the page we are checking if that offset value is greater than the y offset of the skills section - the window height (as we want to start at top of the skills section) + 300 px buffer (delay to animation)

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: '#d63031',
                scaleColor: false, 
                lineWidth: 4, 
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent)) //Grab the element with id 'percent' round it and convert it to text and then pass it to OnStep as a ref
                }
            });
        }
    })
});