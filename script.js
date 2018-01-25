$(function(){

$("#submitBtn").click(function(){
    var city = $("#city").val();
    var country = $("#country").val();

    if(city.length > 1){
        var urlLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
        urlLink = urlLink + city;

        if(country.length == 2){
            urlLink = urlLink + ',' + country;
            
        }

        urlLink = urlLink + '&APPID=a84fd6bdde590e3024412e55a99152c0';
        console.log(urlLink);

        $.ajax({
            url:urlLink,
            data: { format: 'json'},
            error: function(){
               $("#error").html('City not Found');
            },
            dataType: "json",
            success : createTable,
            type: 'GET'

        });

    }

    
});

function createTable(data){
   
    $("#error").html('');
    $("#weatherContainer").empty();
    $("#weatherContainer").hide();

    var table = $('<table/>');
    table.addClass('table table-bordered table-striped');
    $("#weatherContainer").append(table);
    table.append("<tr class='col-md-12 headRow text-center'><th colspan ='2'>Current weather in "+data.name+"</th></tr>");
    

    table.append(getTableRow('<img src="thermometer.png"> Temperature: ',parseFloat(data.main.temp-273.15).toFixed(1) + '°','<img src="humidity.png"> Humidity: ',data.main.humidity+'%' ));
    table.append(getTableRow('<img src="clouds.png"> Description: ', data.weather[0].description,'<img src="pressure.png"> Pressure: ',data.main.pressure + ' hPa' ));

    if($('#showDetails').is(":checked")){

        table.append(getTableRow('<img src="sunrise.png"> Sunrise: ', convertTime(data.sys.sunrise),'<img src="sunset.png"> Sunset: ',convertTime(data.sys.sunset) ));
        table.append(getTableRow('<img src="wind.png"> Wind speed: ', data.wind.speed + 'm/s','Visibility: ',data.visibility ));
        table.append(getTableRow('<img src="thermometer.png"> Min temperature: ', parseFloat(data.main.temp_min-273.15).toFixed(1)+ '°','<img src="thermometer.png"> Max temperature: ',parseFloat(data.main.temp_max-273.15).toFixed(1)+ '°' ));

    }
        $("#weatherContainer").fadeIn('normal');
    
}

function getTableRow(name1,data1,name2,data2){
    var row = $('<tr/>');
    var column = $('<td/>');
    var column2 = $('<td/>');
    row.append(column);
    column.html(name1 + data1);
    row.append(column2);
    column2.html(name2 + data2);
    return row;
    
}

function convertTime(time){
    // var utcSeconds = data;
    var d = new Date(time*1000);
    // d.setUTCSeconds(data);
    var h =  d.getHours();
    var min =  d.getMinutes();
    var sec =  d.getSeconds();

    if(h<10){
        h = '0' + h;
    }
    if(min<10) {
        min = '0' + min;
    }
    if(sec<10) {
        sec = '0' + sec;
    }

    return h+':'+ min+':'+ sec;
}

});