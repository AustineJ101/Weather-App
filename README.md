# Weather App
![Weather App Demo](.src/assets/images/App.gif)
A weather application built with HTML, CSS, and JavaScript as part of
The Odin Project's Asynchronous JavaScript and APIs curriculum.

The project demonstrates working with asynchronous JavaScript, Promises,
API consumption, and DOM manipulation by retrieving and displaying
real-time weather information.

[Live Preview]("https://austinej101.github.io/Weather-App/")

## Features

- Search for the weather in any city worldwide.
- Display the current temperature with the option to switch between °C
  and °F.
- Show the day's forecast, temperature range, wind speed, and rain
  probability.
- Display the local date and time for the selected city.
- Persist the last searched city using `localStorage` so it is restored
  after a page refresh.
- Display loading and error states to improve the user experience.

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Visual Crossing Weather API
- Web Storage API (`localStorage`)
- Webpack

## What I Learned

- Working with Promises and async/await.
- Consuming REST APIs.
- Managing asynchronous UI states.
- Organizing JavaScript into reusable modules with Webpack.
- Persisting application state using localStorage.

## Future Improvements

- Add geolocation support.
- Add hourly forecasts.