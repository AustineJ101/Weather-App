
function getCurrentCity(){
    return JSON.parse(localStorage.getItem("currentCity") || "Nairobi");
}

function setCurrentCity(newCity){
    localStorage.setItem("currentCity", JSON.stringify(newCity));
}

export {getCurrentCity, setCurrentCity}