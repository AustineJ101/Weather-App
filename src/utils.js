
function convertToFahrenheit(temp){
    const result = Math.round((temp * 9/5) + 32)
    return result;
}

function convertToCelsius(temp){
    const result = Math.round((temp - 32) * 5/9)
    return result;
}

function convertToKph(mph){
    const CONVERSION_RATE = 1.609;
    const result = mph * CONVERSION_RATE;
    return result.toFixed(1);
}

function createWeatherIcon(icon, alt){
    const img = document.createElement("img");
    img.src = icon;
    img.alt = alt;
    img.classList.add("weather-icon");

    return img;
}

function capitalizeLocationFirstLetter(location){
    const lowercaseArr = location.toLowerCase().split("");
    let firstLetter = lowercaseArr[0].toUpperCase();
    let restOfLetters = lowercaseArr.join("").slice(1);

    return firstLetter + restOfLetters;

}

export { convertToCelsius, convertToFahrenheit, createWeatherIcon, convertToKph, capitalizeLocationFirstLetter }