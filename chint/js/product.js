
// PROD
    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            showOnStart : true
        },
        hash : true
    })
     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: true
          }
        }]
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        arrows: true,
        centerMode: true,
        vertical:true,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: true,
        focusOnSelect: true
    });
// PROD
//InfoBlock-->
function toggle(btn,textBlock){
    $(btn).on( "click", function() {
        $('.infoText').hide();
        $(textBlock).show();
        $('.active').removeClass('active');
        $(btn).addClass('active');
        // document.body.scrollTop = document.body.scrollHeight;
    });
}
toggle('#infoBtn_1','#infoTab1');
toggle('#infoBtn_2','#infoTab2');
toggle('#infoBtn_3','#infoTab3');
toggle('#infoBtn_4','#infoTab4');
toggle('#infoBtn_5','#infoTab5');
$('#infoTab1').show();
//<--InfoBlock

// Similar
$('.simWrap').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },

        767:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// Similar









