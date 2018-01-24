$(function(){

$("#submitBtn").click(function(){

    var city = $("#city").val();
    var country = $("#country").val();

    if(city.length > 1){
        var urlLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
        urlLink = urlLink + city;
    }

    if(country.length == 2){
        urlLink = urlLink + ',' + country;
        urlLink = urlLink + '&APPID=a84fd6bdde590e3024412e55a99152c0';
        console.log(urlLink);
    }

});


});