import "./styles.css";
import "./reset.css";

import { getWeatherData } from "./weatherData.js";

const input = document.querySelector("input#city");
const fetchBtn = document.querySelector("form button");

fetchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const cityName = input.value;
    try{
        if(cityName){
            const data = await getWeatherData(cityName);
            console.log(data);
            input.value = "";
            input.focus();
        }else{
            input.focus();
        } 
        
    }catch(error){
        console.log(error.message)
    }
     
})

