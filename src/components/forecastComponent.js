function foreCastComponent(obj){
    const forecast = obj.days[0].description;
    const para = document.createElement("p");
    para.classList.add("forecast")
    para.textContent = `Today's Forecast: ${forecast}`;
    return para;
}

export { foreCastComponent }