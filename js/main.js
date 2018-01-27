$( document ).ready(function() {
    $('.item-slide').slick({
    infinite: false,
    adaptiveHeight:true,        
    responsive: [{
      breakpoint: 2000,
      settings: "unslick"
      }, {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        draggable: true,
        dots:true,
        adaptiveHeight:true
       }

        }]
    });

    $(".no-active").click(function(event) {  
        event.preventDefault();
    });​


});


