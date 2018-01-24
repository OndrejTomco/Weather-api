$(function(){

$("#submitBtn").click(function(){
    createTable();
    // var city = $("#city").val();
    // var country = $("#country").val();

    // if(city.length > 1){
    //     var urlLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
    //     urlLink = urlLink + city;
    // }

    // if(country.length == 2){
    //     urlLink = urlLink + ',' + country;
        
    // }

    // urlLink = urlLink + '&APPID=a84fd6bdde590e3024412e55a99152c0';
    // console.log(urlLink);

    //     $.ajax({
    //         url:urlLink,
    //         data: { format: 'json'},
    //         error: function(){
    //             console.log('error');
    //         },
    //         dataType: "json",
    //         success : createTable,
    //         type: 'GET'

    //     });

});

/*
temp, pressure, humidity,sunrise,sunset, temp min
,temp max,wind speed

*/

function createTable(data){
    console.log('hey');
    var row = $('<div/>');
    var name = $('<span/>');
    name.html("Temperature:");
    row.addClass('row border col-md-8');
    $("#weatherContainer").append(row);
    row.append(name);

    var row2 = $('<div/>');
    var name2 = $('<span/>');
    name2.html("Humidity:");
    row2.addClass('row border col-md-6');
    $("#weatherContainer").append(row2);
    row2.append(name2);
    
}

});