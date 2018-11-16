tableData=[{"INN":"5036094403","NAME_SHORT":"ИНТАРКОМ ПЛЮС","NAME_FULL":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","LEGAL_ADDR":"142110, Московская область, г. Подольск, ул. Маштакова, д.12, оф.429","TELEPHON":"8-(4967) 57-38-80, 8-(4967) 57-27-66 факс 8-(4967) 57-27-66","Е_MAIL":"intarcom@intarcom.ru","KPP":"503601001","BANK":"ОАО \"Сбербанк России\" г. Москва","BANK_ACCOUNT":"40702810240020009068","KOR_ACCOUNT":"30101810400000000225","BIK":"044525225","OGRN":"1085074012286","BOSS":"Шепелев С.А."},{"INN":"5046093304","NAME_SHORT":"ЖКХ ","NAME_FULL":"Комитет по ЖКХ ","LEGAL_ADDR":"142110, Московская область, г. Подольск, ул. Кирова, д.4, оф.107","TELEPHON":"телефоны","Е_MAIL":"","KPP":"","BANK":"","BANK_ACCOUNT":"","KOR_ACCOUNT":"","BIK":"","OGRN":"","BOSS":""}];
infoData={};
function getFilter(inn, name) {
    if(inn==""){inn="ALL"}
    if(name==""){name="ALL"}
    var rows = "";
    $.each(tableData, function (index, user) {
        rows += row(user);
        infoData[user.INN]=user;
    })
    $("table tbody").empty();
    $("table tbody").append(rows);
}
// создание строки для таблицы
var row = function (user) {
    return "<tr data-rowid='" + user.INN + "'><td><b><a >" + user.INN + "</b><p><a >" + user.NAME_FULL + "</a></p></td><td ><button class='infoBtn' onclick='info("+user.INN+")'>Info</button></td>";
}
$("#filterInn, #filterName").keyup(function(e){
    e.preventDefault();
    var filterInn  = $("#filterInn").val();
    var filterName = $("#filterName").val();
    getFilter(filterInn, filterName);
})
        
function info(inn) {
    // console.log(infoData[inn]);
    $('body').toggleClass('nopopup');
    $('.popup .fields').empty();
    var data=infoData[inn];
    var text="";
    if(data.NAME_FULL){text+="<div><b>Название: </b><p>"+data.NAME_FULL+"</p></div>"}
    if(data.INN){text+="<div><b>ИНН:</b><p>"+data.INN+"</p></div>"}
    if(data.KPP){text+="<div><b>KПП: </b><p>"+data.KPP+"</p></div>"}
    if(data.LEGAL_ADDR){text+="<div><b>Адрес: </b><p>"+data.LEGAL_ADDR+"</p></div>"}
    if(data.TELEPHON){text+="<div><b>Телефон: </b><p>"+data.TELEPHON+"</p></div>"}
    if(data.BANK){text+="<div><b>Банк:</b><p>"+data.BANK+"</p></div>"}
    if(data.BANK_ACCOUNT){text+="<div><b>Банковский счет: </b><p>"+data.BANK_ACCOUNT+"</p></div>"}
    if(data.BIK){text+="<div><b>БИК: </b><p>"+data.BIK+"</p></div>"}
    if(data.KOR_ACCOUNT){text+="<div><b>КОР Счет:</b><p>"+data.KOR_ACCOUNT+"</p></div>"}
    if(data.OGRN){text+="<div><b>ОГРН: </b><p>"+data.OGRN+"</p></div>"}
    if(data.Е_MAIL){text+="<div><b>Email: </b><p>"+data.Е_MAIL+"</p></div>"}
    $('.popup .fields').append(text);
}
$(".close, .shadow").click(function(){
  $('body').toggleClass('nopopup');
})
var filterInn  = $("#filterInn").val();
var filterName = $("#filterName").val();
if((!filterInn=="")||(!filterName=="")){
  getFilter(filterInn, filterName);
}