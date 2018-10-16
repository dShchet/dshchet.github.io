$( document ).ready(function() {
    $(' .modal-close,  .butn-white').on('click', function() {
      $('.modalBlock').removeClass('is-visible');
      $('.modalMine').removeClass('is-visible');
    });
    
    function showModal_1(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_1').addClass('is-visible');
    }
    function showModal_2(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_2').addClass('is-visible');
    }
    function showModal_3(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_3').addClass('is-visible');
    }
    function showModal_4(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_4').addClass('is-visible');
    }
    function showModal_5(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_5').addClass('is-visible');
    }
    function showModal_6(){
        $('.modalMine').removeClass('is-visible');
        $('.modalBlock, .modal_6').addClass('is-visible');
    }
    
    $('#btnPop_1').click(function (){showModal_1()});
    $('#btnPop_2').click(function (){showModal_2()});
    $('#btnPop_3').click(function (){showModal_3()});
    $('#btnPop_4').click(function (){showModal_4()});
    $('#btnPop_5').click(function (){showModal_5()});
    $('#btnPop_6').click(function (){showModal_6()});
});