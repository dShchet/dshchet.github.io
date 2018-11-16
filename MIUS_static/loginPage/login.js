// Получение всех пользователей
var url2=window.location.protocol+"//"+window.location.host;
function checkLoginInfo(login, pass) {
    if(login=='f'&&pass=="n"){
        $(".loginBlock").removeClass('invalidCode');
        setTimeout(function(){
            window.location.href="https://dshchet.github.io/MIUS_static/sudpretPage/index.html"
          },200);
    }else{$(".loginBlock").addClass('invalidCode');}
}

$('#inputLogin').keyup(function(){
  if(!$("#inputLogin").val()){$(".loginWrap").addClass('empty')}else{
      $(".loginWrap").removeClass('empty');}
})
$('#inputPass').keyup(function(){
  if(!$("#inputPass").val()){$(".passWrap").addClass('empty')}else{
      $(".passWrap").removeClass('empty');}
})
$(".loginForm .btn").click(function(e){
    e.preventDefault();
    var inputLogin  = $("#inputLogin").val();
    var inputPass = $("#inputPass").val();
  if(!$("#inputLogin").val()){$(".loginWrap").addClass('empty')}else{
      $(".loginWrap").removeClass('empty');}
  if(!$("#inputPass").val()){$(".passWrap").addClass('empty')}else{
      $(".passWrap").removeClass('empty');}
    checkLoginInfo(inputLogin, inputPass);
})
