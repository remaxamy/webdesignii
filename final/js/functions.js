$(function(){

    $("#main-form").on("submit" , function (e) {
        e.preventDefault();

        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person?apikey=71329d70-963f-11ea-a71f-9be720a50a91&q=displayname:'+val+''
        }).done(function (data) {
            console.log(data)
            let t= $(data.records)[0].personid;
            console.log('person ID')
            console.log(t)
            localStorage.setItem("personFromHome",t);
            localStorage.setItem("personFromHomeName",val);
            if(t){
                location.href ="index2.html";
            }
        });

    })

    var hasPerson = localStorage.getItem("personFromHome")
    var hasPersonName = localStorage.getItem("personFromHomeName")

    if (hasPerson != ""){
        getUserOnLoad(hasPerson)
        $("#input1").val(hasPersonName)
    }

    $("#person-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input1").val();

        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person?apikey=71329d70-963f-11ea-a71f-9be720a50a91&q=displayname:'+val+''
        }).done(function (data) {
            console.log(data)
            let t= $(data.records)[0].personid;
            if(t){
                getUserOnLoad(t)
            }
        });

    })

    function getUserOnLoad(val){
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person/'+val+'?apikey=71329d70-963f-11ea-a71f-9be720a50a91'
        }).done(function (data) {
            console.log(data)
            $("#result1").empty();

            $("#result1").append('<p><b>Name: '+data.displayname+'</b></p>');
            $("#result1").append('<p>Gender: '+data.gender+'</p>');
            $("#result1").append('<p>Birthplace: '+data.birthplace+'</p>');
            $("#result1").append('<p>Culture: '+data.culture+'</p>');
            $("#result1").append('<p>Date: '+data.displaydate+'</p>');
            $("#result1").append('<p>Url: '+data.url+'</p>');
            $("#result1").append('<p>Last Update: '+data.lastupdate+'</p>');


        });
    }

    $("#artist-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person?q='+val+'&apikey=71329d70-963f-11ea-a71f-9be720a50a91&sort=random'
        }).done(function (data) {
            console.log(data)
            $("#result").empty();
            $(data.records).each(function () {
                console.log($(this))
                let t= $(this)[0].displayname;
                let w= $(this)[0].lastupdate;
                $("#result").append('<p>'+t + ' - ' + w+'</p>');
            })
        });

    })


    $("#time-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/period?&apikey=71329d70-963f-11ea-a71f-9be720a50a91&sort=random'
        }).done(function (data) {
            console.log(data)
            $("#result").empty();
            $(data.records).each(function () {
                console.log($(this))
                let t= $(this)[0].name;
                let w= $(this)[0].lastupdate;
                $("#result").append('<p>'+t + ' - ' + w+'</p>');
            })
        });

    })



    $("#medium-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/medium?apikey=71329d70-963f-11ea-a71f-9be720a50a91&sort=random'
        }).done(function (data) {
            console.log(data)
            $("#result").empty();
            $(data.records).each(function () {
                console.log($(this))
                let t= $(this)[0].name;
                let w= $(this)[0].lastupdate;
                let o= $(this)[0].objectcount;
                if (o == null){
                    o= 'No object';
                }
                $("#result").append('<p>'+t + ' - ' + w+' - ' + o+'</p>');
            })
        });

    })

})
