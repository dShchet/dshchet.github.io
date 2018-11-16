        var infoData={};
        var titleData={};
        var url=window.location.pathname.replace('otdel:','').replace(/\//g, '');
        var url2=window.location.protocol+"//"+window.location.host;
        var inn   = url.split(':')[0];
        var otdel = url.split(':')[1];
        if(otdel=="PRAVO"){otdel="Правовом отделе"}
        if(otdel=="KEZO"){otdel="Комитете имущественных и земельных отношений"}
        rowsData=[{"REC_NO":5,"OTDEL_PRAVO":"ARBITRATION"},{"REC_NO":2,"OTDEL_PRAVO":"ISP_LAND_LEASE"},{"REC_NO":2,"OTDEL_PRAVO":"ISP_ROOM_RENTAL"}];
        innData=[{"INN":"5036094403","NAME_FULL":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","NAME_SHORT":"ИНТАРКОМ ПЛЮС","LEGAL_ADDR":"142110, Московская область, г. Подольск, ул. Маштакова, д.12, оф.429","TELEPHON":"8-(4967) 57-38-80, 8-(4967) 57-27-66 факс 8-(4967) 57-27-66"}];
            console.log(otdel);
        function GetData() {
            var rows = "";
            $.each(rowsData, function (index, user) {
                rows += row(user);
                infoData[index]=user;
            })
            $(".fields").append(rows);
        }
        function GetUser() {
            titleData[0]=innData[0];
            $("#name").append(titleData[0]['NAME_FULL']);
        }
        var row = function (data) {
            if(data.OTDEL_PRAVO=="ARBITRATION"){
                var podr='arbtrg';
              return "<a class='link' >Арбитраж</a>";
            }
            if(data.OTDEL_PRAVO=="ISP_LAND_LEASE"){
                var podr="land"
              return "<a class='link' >Аренда земли</a>";
            }
            if(data.OTDEL_PRAVO=="ISP_ROOM_RENTAL"){
                var podr="room"
              return "<a class='link'>Аренда помещений</a>";
            }
        }
        function goto(otdel){
            // window.location.href="/delo:"+inn+":"+otdel;
        }
        GetUser()
        GetData();