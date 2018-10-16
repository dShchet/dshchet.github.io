


function toggle(btn,textBlock){
    $(btn).on( "click", function() {
        $('.sec').hide();
        $(textBlock).show();
        $('.active').removeClass('active');
        $(btn).addClass('active');
        // document.body.scrollTop = document.body.scrollHeight;
    });
}
toggle('#tabBtn_1','#bascetBlock');
toggle('#tabBtn_2','#authBlock');
toggle('#tabBtn_3','#takeBlock');
$('.sec').hide();
$('#takeBlock').show();

$(".btnEnteMobiler").click(function(){
    $('#regit').removeClass('active');
    $('#enter').addClass('active');
})
$(".btnRegitMobile").click(function(){
    $('#enter').removeClass('active');
    $('#regit').addClass('active');
})

$(".btnAdd").click(function(){
    $(".btnAdd").toggleClass('open');
    $(".reqs").toggleClass('open');
})








