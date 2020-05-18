$(function(){

    $("#main-form").on("submit" , function (e) {
        e.preventDefault();
        location.href ="index2.html";

    })

    $("#person-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person?q='+val+'&apikey=71329d70-963f-11ea-a71f-9be720a50a91'
        }).done(function (data) {
            console.log(data)
            $("#result").empty();
            $(data.records).each(function () {
                console.log($(this))
                let t= $(this)[0].displayname;
                $("#result").append('<p>'+t+'</p>');
            })
        });

    })

    $("#artist-form").on("submit" , function (e) {
        e.preventDefault();
        let val = $("#input").val();
        $.ajax({
            method: 'GET',
            url: 'https://api.harvardartmuseums.org/person?q='+val+'&apikey=71329d70-963f-11ea-a71f-9be720a50a91'
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
            url: 'https://api.harvardartmuseums.org/period?&apikey=71329d70-963f-11ea-a71f-9be720a50a91'
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
            url: 'https://api.harvardartmuseums.org/medium?apikey=71329d70-963f-11ea-a71f-9be720a50a91'
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
