import { convertToCelsius, convertToKph, createWeatherIcon } from "./utils.js";
import tempIcon from "./assets/icons/temperature.svg";
import windIcon from "./assets/icons/wind.svg";
import rainIcon from "./assets/icons/rain.svg";

function complementaryWeatherComponent(obj){
    let tempMin = convertToCelsius(obj.tempmin);
    let tempMax = convertToCelsius(obj.tempmax);
    let wind = convertToKph(obj.windspeed);
    let rainChance = obj.precipprob;

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("weather-details");

    const tempContainer = document.createElement("div");
    const temperatureIcon = createWeatherIcon(tempIcon, "temperature Icon");
    const tempRange = document.createElement("p");
    tempRange.textContent = `Temperature Range: ${tempMin}\u00B0C - ${tempMax}\u00B0C`;

    tempContainer.append(temperatureIcon, tempRange);

    const windContainer = document.createElement("div");
    const windSpeedIcon = createWeatherIcon(windIcon, "wind icon");
    const windSpeed = document.createElement("p");
    windSpeed.textContent = `Wind: ${wind} km/h`;

    windContainer.append(windSpeedIcon, windSpeed);

    const rainContainer = document.createElement("div");
    const rainfallIcon = createWeatherIcon(rainIcon, "rain icon");
    const rainProb = document.createElement("p");
    rainProb.textContent = `Rain Probability: ${rainChance}%`;

    rainContainer.append(rainfallIcon, rainProb);


    mainContainer.append(tempContainer, windContainer, rainContainer);

    return mainContainer;


}

export { complementaryWeatherComponent }