/*fetch('https://xn--d1ailn.xn--p1ai/api2.php?login=YmVyZXpuaWtvdnZvdmEwQGdtYWlsLmNvbQ==&password=M1YxNm8zdjFAMTgwOTIwMDU=&app=112233&type=auth',{
    'method':'GET'
})
    .then(data=>{
        console.log(data);
        return data.text();
    })
    .then(data=>{console.log(data);
    })*/
// URL сервера
//let url = 'https://xn--d1ailn.xn--p1ai/api2.php?login=YmVyZXpuaWtvdnZvdmEwQGdtYWlsLmNvbQ==&password=M1YxNm8zdjFAMTgwOTIwMDU=&app=112233&type=auth'

// Отправка запроса
/*fetch(url,{
    'mode':'no-cors',
    'method':'GET'
})
    .then(response => {
    console.log(response)
    })*/


    /*try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }*/
    /*const lat = 53.1785;
    const lng = 45.1758;
    const params = 'airTemperature';
    
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'cfd5a914-8ed2-11ee-8309-0242ac130002-cfd5a98c-8ed2-11ee-8309-0242ac130002'
      }
    }).then((response) => response.json()).then((jsonData) => {
      // Do something with response data.
      console.log(jsonData)
    });*/
    /*fetch(url,options)
    .then(data=>{
        console.log(data);
        return data.text();
    })
    .then(data=>{console.log(data);
    })*/
    
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{
        'method':'GET'
    })
        .then(data=>{
            //console.log(data);
            return data.json();
        })
        .then(data=>{
    //console.log(data);
    /*document.getElementById('headerid').textContent=
    "Текущее время в Британии: "+
    data['time']['updated']+
    "Текущее время в 0: "+
    data['time']['updatedISO']+
    "///Текущее время в 1: "+
    data['time']['updateduk'];*/
    /*ds=data["chartName"]+
    "\n в USD("+data["bpi"]["USD"]["description"]+"): "+
    data["bpi"]["USD"]["rate_float"].split(/\r\n|\r|\n/g);
    dd=ds[0]+'\n'+ds[1];*/

    document.getElementById('el1id').innerText =
    data["chartName"]+
    " в USD: \n"+//("+data["bpi"]["EUR"]["description"]+"): \n"+("+data["bpi"]["USD"]["description"]+"): \n"+
    data["bpi"]["USD"]["rate_float"];

    document.getElementById('el2id').innerText=
    data["chartName"]+
    " в GBP: \n"+//("+data["bpi"]["EUR"]["description"]+"): \n"+("+data["bpi"]["GBP"]["description"]+"): \n"+
    data["bpi"]["GBP"]["rate_float"];

    document.getElementById('el3id').innerText=
    data["chartName"]+
    " в EUR: \n"+//("+data["bpi"]["EUR"]["description"]+"): \n"+
    data["bpi"]["EUR"]["rate_float"];
        })
jsonf={
    "time":{
        "updated":"Dec 11, 2023 10:36:00 UTC",
        "updatedISO":"2023-12-11T10:36:00+00:00",
        "updateduk":"Dec 11, 2023 at 10:36 GMT"},
    "disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "chartName":"Bitcoin",
    "bpi":{ 
        "USD":{
            "code":"USD",
            "symbol":"&#36;",
            "rate":"42,400.1634",
            "description":"United States Dollar",
            "rate_float":42400.1634},
        "GBP":{
            "code":"GBP",
            "symbol":"&pound;",
            "rate":"35,429.2373",
            "description":"British Pound Sterling",
            "rate_float":35429.2373},
        "EUR":{
            "code":"EUR",
            "symbol":"&euro;",
            "rate":"41,303.9495",
            "description":"Euro",
            "rate_float":41303.9495}
        }
}


/*////////////////////////////////////////              API2              ////////////////////////////////////////////// */





fetch('https://api.openvisionapi.com',{
        'method':'GET'
    })
        .then(data=>{
            //console.log(data);
            return data;
        })
        .then(data=>{
            console.log(11111111111111111111);
            console.log(data);
        })


function clock() {
    var d = new Date();
    var month_num = d.getMonth()
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    
    month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря");
    
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    
    date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
    " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
    if (document.layers) {
        document.layers.doc_time.document.write(date_time);
        document.layers.doc_time.document.close();
    }
    else document.getElementById("doc_time").innerHTML = date_time;
        setTimeout("clock()", 1000);
    }
clock();
