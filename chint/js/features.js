if($("#hidden-text").length)	
{
	$('<div class="btn btn--line show-btn" id="show-btn">Подробнее</div>').insertBefore("#hidden-text");
	$('<div class="btn btn--line hide-btn" id="hide-btn">Скрыть</div>').insertAfter("#hidden-text");
}
$(document).ready(function(){
    $("#show-btn").bind('click tap',function(){
        $(this).hide();
        $('#hidden-text').slideToggle(500);
        $("#hide-btn").css('display','flex');
    });
	$("#hide-btn").bind('click tap',function(){
		$(this).hide();
		$('#hidden-text').slideToggle(500);
        setTimeout(function() { $("#show-btn").show() }, 500);
	});
});