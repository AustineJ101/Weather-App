function foreCastComponent(obj){
    const forecast = obj.description;
    const para = document.createElement("p");
    para.classList.add("forecast")
    para.textContent = `Today's Forecast: ${forecast}`;
    return para;
}

export { foreCastComponent }