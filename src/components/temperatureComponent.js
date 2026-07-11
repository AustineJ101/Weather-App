import { convertToCelsius, convertToFahrenheit } from "../utils.js";

function temperatureComponent(data){
    //Expecting temp from API to be in fahrenheit
    let temperature = convertToCelsius(data.currentConditions.temp);
    let currentConditions = data.currentConditions.conditions;

    const tempContainer = document.createElement("div");
    tempContainer.classList.add("temp-component");

    const h1 = document.createElement("h1");
    h1.textContent = `${temperature}`

    const rightContainer = document.createElement("div");
    const buttonsContainer = document.createElement("div");

    const celsiusBtn = document.createElement("button");
    celsiusBtn.textContent = "\u00B0C";
    celsiusBtn.classList.add("celsiusBtn", "active"); //defaults to active

    const fahrenheitBtn = document.createElement("button");
    fahrenheitBtn.textContent = "\u00B0F";
    fahrenheitBtn.classList.add("fahrenheitBtn");

    const pipe = document.createElement("span");
    pipe.textContent = "|";
    pipe.classList.add("custom-pipe");

    //Event listener to handle temp conversion
    buttonsContainer.addEventListener("click", (e) => {

        //handle celsius btn click event
        if(e.target.classList.contains("celsiusBtn")){
            if(!e.target.classList.contains("active")){
                e.target.classList.add("active");
                //Toggle the active class btwn the buttons
                fahrenheitBtn.classList.remove("active");

                //Adjust to show temp in degrees celsius 
                temperature = convertToCelsius(data.currentConditions.temp);
                h1.textContent = `${temperature}`
            }
            
        }

        //handle fahrenheit btn click event

        if(e.target.classList.contains("fahrenheitBtn")){
            if(!e.target.classList.contains("active")){
                e.target.classList.add("active");
                celsiusBtn.classList.remove("active");

                  //Adjust to show temp in degrees fahrenheit
                temperature = convertToFahrenheit(data.currentConditions.temp);
                h1.textContent = `${temperature}`
            }
        }


    })

    buttonsContainer.append(celsiusBtn, pipe, fahrenheitBtn);

    const tempCondition = document.createElement("p");
    tempCondition.textContent = `${currentConditions}`;

    rightContainer.append(buttonsContainer, tempCondition);

    tempContainer.append(h1, rightContainer);

    return tempContainer;
    
}

export { temperatureComponent }