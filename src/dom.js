import { locationTimeComponent } from "./locationTimeComponent.js";
import { temperatureComponent } from "./temperatureComponent.js";
import { foreCastComponent } from "./forecastComponent.js";
import { complementaryWeatherComponent } from "./complementaryWeatherComponent.js";
import { errorMessageComponent } from "./errorMessageComponent.js";
import { loadingStateComponent } from "./loadingStateComponent.js";

const main = document.querySelector("main");
const locationTimeDateWrapper = document.querySelector(".location-time-date");


function renderWeatherData(data){
    clearDynamicContainers();
    let locationTimeDate = locationTimeComponent(data);
    let temperature = temperatureComponent(data);
    let forecast = foreCastComponent(data);
    let weatherDetails = complementaryWeatherComponent(data);

    locationTimeDateWrapper.appendChild(locationTimeDate)
    main.appendChild(temperature) 
    main.appendChild(forecast)
    main.appendChild(weatherDetails)
}

function renderErrorMessage(error){
    let message = errorMessageComponent(error);
    clearDynamicContainers()
    main.appendChild(message);
}

function clearDynamicContainers(){
    locationTimeDateWrapper.innerHTML = "";
    main.innerHTML = "";

}

function showLoadingState(){
    let state = loadingStateComponent();
    clearDynamicContainers()
    main.appendChild(state);
}
export { renderWeatherData, renderErrorMessage, showLoadingState }