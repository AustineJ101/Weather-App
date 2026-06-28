const KEY = "J77C4BXC9DKJTHNGPCB28SXP8";

async function getWeatherData(location){
    try{
        const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${KEY}&contentType=json`;
        const response = await fetch(request);

        if(!response.ok){
            throw new Error(`Weather Service Error: ${response.status}`)
        }

        const weatherData = await response.json();

        return weatherData;

    } catch(error){
        console.log(`Internal Log: ${error.message}`)
        throw new Error("Something Went Wrong...Please try again")
    }
}

export { getWeatherData }