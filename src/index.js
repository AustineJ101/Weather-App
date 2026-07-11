import "./styles.css";
import "./reset.css";

import { getWeatherData } from "./weatherData.js";
import { renderErrorMessage, renderWeatherData, showLoadingState } from "./dom.js";
import { getCurrentCity, setCurrentCity } from "./storage.js";

const input = document.querySelector("input#city");
const fetchBtn = document.querySelector("form button");

(async () => {
    input.focus();
    showLoadingState();
    try{
        let currentCity = getCurrentCity();
        const data = await getWeatherData(currentCity); 
        renderWeatherData(data);
        input.value = "";
        input.focus();
    }catch(error){
        renderErrorMessage(error);
    }
})()

fetchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const cityName = input.value;
    try{
        if(cityName){
            setCurrentCity(cityName);
            let currentCity = getCurrentCity();
            showLoadingState();
            const data = await getWeatherData(currentCity);
            console.log(data);
            renderWeatherData(data)
           
            input.value = "";
            input.focus();
        }else{
            input.focus();
        } 
        
    }catch(error){
        console.log(error.message)
        renderErrorMessage(error)
    }
     
})

