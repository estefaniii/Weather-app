import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './component/Weather';

const API_KEY = 'cfed23f92fdc047457ad9d9f542d31e4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const codes = {
	thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
	drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
	rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
	snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
	atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
	clear: [800],
	clouds: [801, 802, 803, 804],
};

const icons = {
	thunderstorm: '⛈️',
	drizzle: '🌦️',
	rain: '🌧️',
	snow: '❄️',
	atmosphere: '🌫️',
	clear: '🌞',
	clouds: '☁️',
};

function App() {
	const [coords, setCoords] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		if (window.navigator.geolocation) {
			function success({ coords }) {
				const { latitude, longitude } = coords;
				setCoords({ lat: latitude, lon: longitude });
			}

			function error(err) {
				console.log('Permission denied or error:', err);
			}

			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log('Geolocation is not supported by this browser');
		}
	}, []);

	useEffect(() => {
		if (coords) {
			axios
				.get(
					`${BASE_URL}lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=en&appid=${API_KEY}`,
				)
				.then((res) => {
					const codeId = res.data.weather[0].id;
					const keys = Object.keys(codes);

					setWeather({
						city: res.data.name,
						country: res.data.sys.country,
						temp: res.data.main.temp,
						description: res.data.weather[0].description,
						icon: icons[keys.find((k) => codes[k].includes(codeId))],
						wind: res.data.wind.speed,
						clouds: res.data.clouds.all,
						pressure: res.data.main.pressure,
					});
				})
				.catch((err) => {
					console.error('Error fetching weather data:', err);
				});
		}
	}, [coords]);

	return <div>{weather && <Weather weather={weather} />}</div>;
}

export default App;
