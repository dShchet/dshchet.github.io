var infoData={};
var titleData={};
// var url=window.location.pathname.replace('delo:','').replace(/\//g, '');
// var inn   = url.split(':')[0];
var inn   = 5036094403;
// var cat = url.split(':')[1];
var cat = "arbtrg";
// var cat = "room";
// var cat = "land";
// var error =0;
// if(catName=="") error+=" Неверная категория;";
// var infoData={};
if(cat=="arbtrg"){
    catName="Арбитраж"
    infoData=[{"ID":4,"INN_CLAIMANT":"5036094403","NAME_SHORT_CLAIMANT":"ИНТАРКОМ ПЛЮС","NAME_FULL_CLAIMANT":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","INN_DEFENDANT":"5046093304","NAME_SHORT_DEFENDANT":"ЖКХ","NAME_FULL_DEFENDANT":"Комитет по ЖКХ ","REG_N":"1","REG_DATE":"2018-01-10T00:00:00.000Z","REGYEAR":2018,"TRANSFER_REG_N":"1","TRANSFER_REG_DATE":"2018-01-10T00:00:00.000Z","TRANSFER_ID":4,"CASE_NUMBER":"АС 123-56","JUDGE":"Дубровская Е.В.","COURTROOM":"18","COURT_DATE":"2018-09-12T00:00:00.000Z","CLAIM":"","AMOUNT_OF_CLAIM":123000.69,"BUSINESS_MOVEMENT":""}];
}
if(cat=="room"){
    catName="Аренда помещений";
    infoData=[{"ID":1,"INN_CLAIMANT":"5036094403","NAME_SHORT_CLAIMANT":"ИНТАРКОМ ПЛЮС","NAME_FULL_CLAIMANT":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","INN_DEFENDANT":"5046093304","NAME_SHORT_DEFENDANT":"ЖКХ","NAME_FULL_DEFENDANT":"Комитет по ЖКХ ","REG_N":"1","REG_DATE":"2018-01-10T00:00:00.000Z","REGYEAR":2018,"COURT_RECOVERY_NUMBER":"","COURT_RECOVERY_DATE":"1899-12-30T00:00:00.000Z","POST_N":"","POST_DATE":"1899-12-30T00:00:00.000Z","SER_NO_IL":"","SSP_NAME":"","SSP_FIO":"","SSP_FIO_CONTACT":"","ISP_NOMER":"","ISP_DATE":"1899-12-30T00:00:00.000Z","AMOUNT_OF_CLAIM":2000}];
    }
if(cat=="land"){
    catName="Аренда земли";
    infoData=[{"ID":1,"INN_CLAIMANT":"5036094403","NAME_SHORT_CLAIMANT":"ИНТАРКОМ ПЛЮС","NAME_FULL_CLAIMANT":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","INN_DEFENDANT":"5046093304","NAME_SHORT_DEFENDANT":"ЖКХ ","NAME_FULL_DEFENDANT":"Комитет по ЖКХ ","REG_N":"1","REG_DATE":"2018-01-10T00:00:00.000Z","REGYEAR":2018,"COURT_RECOVERY_NUMBER":"333","COURT_RECOVERY_DATE":"2018-11-02T00:00:00.000Z","POST_N":"11","POST_DATE":"2018-11-01T00:00:00.000Z","SER_NO_IL":"444","SSP_NAME":"555","SSP_FIO":"Муравьев Д.А","SSP_FIO_CONTACT":"8 -495-521-88-65","ISP_NOMER":"888","ISP_DATE":"2018-11-03T00:00:00.000Z","AMOUNT_OF_CLAIM":1234}];
    }

function info() {
    var data=infoData[0];
    var text="";
    var COURT_DATE;
    var dateOpt = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    if(data.NAME_FULL_CLAIMANT){text+="<div><b>Истец: </b><p>"+data.NAME_FULL_CLAIMANT+"</p></div>"}
    if(data.NAME_FULL_DEFENDANT){text+="<div><b>Ответчик: </b><p onclick='goto("+data.INN_DEFENDANT+")'>"+data.NAME_FULL_DEFENDANT+"</p></div>"}
    if(data.REG_DATE){
        var regDate=new Date(data.REG_DATE);
        var dateText=regDate.toLocaleString("ru", dateOpt);
        text+="<div><b>Дата регистрации: </b><p>"+dateText+"</p></div>"}
    if(data.COURT_DATE){
        var courtDate=new Date(data.COURT_DATE);
        var dateText=courtDate.toLocaleString("ru", dateOpt);
        text+="<div><b>Дата заседания: </b><p>"+dateText+"</p></div>"}
    if(data.JUDGE){text+="<div><b>Судья:</b><p>"+data.JUDGE+"</p></div>"}
    if(data.AMOUNT_OF_CLAIM){text+="<div><b>Сумма иска:</b><p>"+data.AMOUNT_OF_CLAIM+"р.</p></div>"}
    if(data.CASE_NUMBER){text+="<div><b>Номер дела:</b><p>"+data.CASE_NUMBER+"</p></div>"}
    if(data.COURTROOM){text+="<div><b>Номер комнаты:</b><p>"+data.COURTROOM+"</p></div>"}
    if(data.SSP_FIO_CONTACT){text+="<div><b>Телефон судьи:</b><p>"+data.SSP_FIO_CONTACT+"</p></div>"}
    if(data.INN_DEFENDANT){text+="<div><b>ИНН ответчика:</b><p>"+data.INN_DEFENDANT+"</p></div>"}
    $('.fields').append(text);
}
function GetUser(inn, catName) {

            // var rows2 = "";
            // $.each(data, function (index, user) {
                // rows2 += row(user);
                titleData={"INN":"5036094403","NAME_FULL":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","NAME_SHORT":"ИНТАРКОМ ПЛЮС","LEGAL_ADDR":"142110, Московская область, г. Подольск, ул. Маштакова, д.12, оф.429","TELEPHON":"8-(4967) 57-38-80, 8-(4967) 57-27-66 факс 8-(4967) 57-27-66"};
            // })
            $(".title #name").append(titleData['NAME_FULL']);
            $(".title #cat").append(catName);
            // $(".title #otdel").append(otdel);
}
function goto(inn){
    // window.location.href="/delo:"+inn+":"+otdel;
}
GetUser(inn, catName);
info();
// GetData();