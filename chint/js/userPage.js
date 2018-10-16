

//InfoBlock-->
function toggle(btn,textBlock){
    $(btn).on( "click", function() {
        $('.rightPage').hide();
        $(textBlock).show();
        $('.active').removeClass('active');
        $(btn).addClass('active');
        // document.body.scrollTop = document.body.scrollHeight;
    });
}
toggle('#btnProfile','#profile');
toggle('#btnMyOrders','#myOrders');
toggle('#btnMyDistr','#myDistr');
toggle('#btnHelp','#help');
toggle('#btnDocs','#docs');
$('.rightPage').hide();
$('#profile').show();
//<--InfoBlock











