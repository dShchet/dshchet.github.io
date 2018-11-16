        var infoData={};
        var titleData={};
        var inn=window.location.pathname.replace('inn:','').replace(/\//g, '');
        var url2=window.location.protocol+"//"+window.location.host;
        rowsData=[{"REC_NO":1,"OTDEL":"PRAVO"},{"REC_NO":2,"OTDEL":"KEZO"}];
        innData=[{"INN":"5036094403","NAME_FULL":"Общество с ограниченной ответственностью \"ИНТАРКОМ ПЛЮС\"","NAME_SHORT":"ИНТАРКОМ ПЛЮС","LEGAL_ADDR":"142110, Московская область, г. Подольск, ул. Маштакова, д.12, оф.429","TELEPHON":"8-(4967) 57-38-80, 8-(4967) 57-27-66 факс 8-(4967) 57-27-66"}];
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
        var row = function (user) {
            if(user.OTDEL=="PRAVO"){
                var podr='PRAVO';
              return "<a class='link' >Правовой отдел</a>";
            }
            if(user.OTDEL=="KEZO"){
                var podr='KEZO';
              return "<a class='link' )>Комитет имущественных и земельных отношений</a>";
            }
        }
        function goto(otdel){
        //     window.location.href="/otdel:"+inn+":"+otdel;
        }
        GetUser()
        GetData();