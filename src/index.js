import "./styles.css";
import "./reset.css";

import { getWeatherData } from "./weatherData.js";
import { renderErrorMessage, renderWeatherData, showLoadingState } from "./dom.js";

const input = document.querySelector("input#city");
const fetchBtn = document.querySelector("form button");


fetchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const cityName = input.value;
    try{
        if(cityName){
            showLoadingState();
            const data = await getWeatherData(cityName);
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


