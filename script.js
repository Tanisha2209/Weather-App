const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiId="692232a3f39bde1cd37a6cccb6682f6d";
const searchBox=document.querySelector('#searchbox input');
const searchBtn=document.querySelector('#searchbox button');


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
}

searchBtn.addEventListener('click', ()=>{
    getWeatherDetails(searchBox.value);
});

async function weatherfordiffcities(cityname){
    const res= await fetch(url + `${cityname}` + `&appid=${apiId}`);
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

weatherfordiffcities("new york");


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '54c536b02amshaef27416bf327bcp1f8beajsn2e5529cc508d',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// // const weatherinfo=async()=>{
// //     try {
// //         const response = await fetch(url, options);
// //         const result = await response.text();
// //         console.log(result);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // };
// // weatherinfo();
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options);
// then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err))
