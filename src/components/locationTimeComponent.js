import { capitalizeLocationFirstLetter } from "../utils.js";

function locationTimeComponent(obj){
    const address = capitalizeLocationFirstLetter(obj.resolvedAddress);
    const timezone = obj.timezone;

    const now = new Date();
    const timeOptions = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit"
    }

    const dateOptions = {
        timeZone: timezone,
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const localTime = now.toLocaleTimeString("en-US", timeOptions);
    const localDate = now.toLocaleDateString("en-US", dateOptions);
    const year = now.getFullYear();

    const container= document.createElement("div");
    container.classList.add("location-date-time-container");

    const location = document.createElement("h1");
    location.textContent = `${address}`;

    const dateTime = document.createElement("p");
    dateTime.textContent = `${localDate} | ${localTime}`;

    container.append(location, dateTime);

    return container;

}

export { locationTimeComponent }