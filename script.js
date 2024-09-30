const apiKey = "83c8b8ff8b84312aa3e63d8b716dd983";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherimg = document.querySelector(".weather-icon ")
const box = document.querySelector(".weather")




async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =  await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".wind").innerHTML= data.wind.speed + "Km/h";
    document.querySelector(".con").innerHTML=data.weather[0].main

    if(data.weather[0].main == "Clouds"){
        weatherimg.src = "images/cloud.png"    
    }else if (data.weather[0].main == "Drizzle"){
        weatherimg.src = "images/drizzle.png"    
    } 
    else if (data.weather[0].main == "Drizzle"){
        weatherimg.src = "images/drizzle.png"    
    } 
    else if (data.weather[0].main == "Mist"){
        weatherimg.src = "images/mist.png"    
    } 
    else if (data.weather[0].main == "Rain"){
        weatherimg.src = "images/rain.png"    
    } 
    else if (data.weather[0].main == "Strom"){
        weatherimg.src = "images/strom.png"    
    } 
    else if (data.weather[0].main == "Clear"){
        weatherimg.src = "images/clear.png"    
    } 

    
    
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)  
    box.style.display="block";

})




