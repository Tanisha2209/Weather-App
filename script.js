const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiId="692232a3f39bde1cd37a6cccb6682f6d";
const searchBox=document.querySelector('#searchbox input');
const searchBtn=document.querySelector('#searchbox button');
// const background=document.querySelector('body.background-image');


async function getWeatherDetails(city){
    const response= await fetch(url + city + `&appid=${apiId}`);
    var data= await response.json();

    console.log(data);
    document.querySelector('#cityhead').innerHTML=data.name;
    document.querySelector('#temperature').innerHTML=data.main.temp + "&degC";
    document.querySelector('#humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('#windspeed').innerHTML=data.wind.speed + " km/h";
    document.querySelector('.maxtemp').innerHTML=data.main.temp_max;
    document.querySelector('.mintemp').innerHTML=data.main.temp_min;
    document.querySelector('.feelslike').innerHTML=data.main.feels_like;
    document.querySelector('.pressure').innerHTML=data.main.pressure;
    document.querySelector('.sealevel').innerHTML=data.main.sea_level;
    document.querySelector('.description').innerHTML=data.weather[0].main;
    document.querySelector('.degrees').innerHTML=data.wind.deg;
    document.querySelector('.gust').innerHTML=data.wind.gust;
    document.querySelector('.timezone').innerHTML=data.timezone;

    // if(data.weather[0].main==="Clouds")
    //     background.src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80";
}

searchBtn.addEventListener('click', ()=>{
    getWeatherDetails(searchBox.value);
});

async function weatherfordiffcities(){
    const res= await fetch(url + "new york" + `&appid=${apiId}`);
    var data2=await res.json();
    console.log(data2);

    document.querySelector('#maxnewyork').innerHTML=data2.main.temp_max;
    document.querySelector('#minnewyork').innerHTML=data2.main.temp_min;
    document.querySelector('#feelnew').innerHTML=data2.main.feels_like;
    document.querySelector('#descnew').innerHTML=data2.weather[0].main;
    document.querySelector('#humidnew').innerHTML=data2.main.humidity;
    document.querySelector('#sunrisenew').innerHTML=data2.sys.sunrise;
    document.querySelector('#sunsetnew').innerHTML=data2.sys.sunset;

}

 weatherfordiffcities();

async function weatherfordiffcities2(){
    const res2= await fetch(url + "mumbai" + `&appid=${apiId}`);
    var data3=await res2.json();
    console.log(data3);

    document.querySelector('#maxmum').innerHTML=data3.main.temp_max;
    document.querySelector('#minmum').innerHTML=data3.main.temp_min;
    document.querySelector('#feelmum').innerHTML=data3.main.feels_like;
    document.querySelector('#descmum').innerHTML=data3.weather[0].main;
    document.querySelector('#humidmum').innerHTML=data3.main.humidity;
    document.querySelector('#sunrisemum').innerHTML=data3.sys.sunrise;
    document.querySelector('#sunsetmum').innerHTML=data3.sys.sunset;

}
weatherfordiffcities2();

async function weatherfordiffcities3(){
    const res3= await fetch(url + "bengaluru" + `&appid=${apiId}`);
    var data4=await res3.json();
    console.log(data4);


    document.querySelector('#maxb').innerHTML=data4.main.temp_max;
    document.querySelector('#minb').innerHTML=data4.main.temp_min;
    document.querySelector('#feelb').innerHTML=data4.main.feels_like;
    document.querySelector('#descb').innerHTML=data4.weather[0].main;
    document.querySelector('#humidb').innerHTML=data4.main.humidity;
    document.querySelector('#sunriseb').innerHTML=data4.sys.sunrise;
    document.querySelector('#sunsetb').innerHTML=data4.sys.sunset;

}
  weatherfordiffcities3();

 async function weatherfordiffcities4(){
    const res4= await fetch(url + "shanghai" + `&appid=${apiId}`);
    var data5=await res4.json();
    console.log(data5);


    document.querySelector('#maxsh').innerHTML=data5.main.temp_max;
    document.querySelector('#minsh').innerHTML=data5.main.temp_min;
    document.querySelector('#feelsh').innerHTML=data5.main.feels_like;
    document.querySelector('#descsh').innerHTML=data5.weather[0].main;
    document.querySelector('#humidsh').innerHTML=data5.main.humidity;
    document.querySelector('#sunrisesh').innerHTML=data5.sys.sunrise;
    document.querySelector('#sunsetsh').innerHTML=data5.sys.sunset;

}
 weatherfordiffcities4();

 async function weatherfordiffcities5(){
    const res5= await fetch(url + "kolkata" + `&appid=${apiId}`);
    var data6=await res5.json();
    console.log(data6);


    document.querySelector('#maxk').innerHTML=data6.main.temp_max;
    document.querySelector('#mink').innerHTML=data6.main.temp_min;
    document.querySelector('#feelk').innerHTML=data6.main.feels_like;
    document.querySelector('#desck').innerHTML=data6.weather[0].main;
    document.querySelector('#humidk').innerHTML=data6.main.humidity;
    document.querySelector('#sunrisek').innerHTML=data6.sys.sunrise;
    document.querySelector('#sunsetk').innerHTML=data6.sys.sunset;

}
 weatherfordiffcities5();



