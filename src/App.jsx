import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import { FiSearch } from 'react-icons/fi';
import { weatherCodes, weatherIcons } from './utils/weatherCodes';

const API_KEY = 'cfed23f92fdc047457ad9d9f542d31e4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

function App() {
	const [coords, setCoords] = useState(null);
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (window.navigator.geolocation) {
			function success({ coords }) {
				const { latitude, longitude } = coords;
				setCoords({ lat: latitude, lon: longitude });
			}

			function error(err) {
				setError('Geolocation permission denied. Using default location...');
				setLoading(false);
				// Default to London if geolocation fails
				setCoords({ lat: 51.5074, lon: -0.1278 });
			}

			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			setError('Geolocation not supported. Using default location...');
			setLoading(false);
			setCoords({ lat: 51.5074, lon: -0.1278 });
		}
	}, []);

	useEffect(() => {
		if (coords) {
			fetchWeather(coords.lat, coords.lon);
		}
	}, [coords]);

	const fetchWeather = (lat, lon) => {
		setLoading(true);
		axios
			.get(
				`${BASE_URL}lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`,
			)
			.then((res) => {
				const codeId = res.data.weather[0].id;
				const weatherType = Object.keys(weatherCodes).find((key) =>
					weatherCodes[key].includes(codeId),
				);

				setWeather({
					city: res.data.name,
					country: res.data.sys.country,
					temp: res.data.main.temp,
					description: res.data.weather[0].description,
					icon: weatherIcons[weatherType],
					wind: res.data.wind.speed,
					clouds: res.data.clouds.all,
					pressure: res.data.main.pressure,
					humidity: res.data.main.humidity,
				});
				setError(null);
			})
			.catch((err) => {
				setError('Error fetching weather data');
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query.trim()) return;

		axios
			.get(`${BASE_URL}q=${query}&units=metric&lang=en&appid=${API_KEY}`)
			.then((res) => {
				setCoords({
					lat: res.data.coord.lat,
					lon: res.data.coord.lon,
				});
			})
			.catch((err) => {
				setError('City not found');
			});
	};

	if (loading)
		return (
			<div className="card">
				<div className="loader">Loading weather data...</div>
			</div>
		);

	return (
		<div className="app-container">
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<form onSubmit={handleSearch} className="search-form">
					<input
						type="text"
						id="city-search"
						name="city"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search city..."
						className="search-input"
						autoComplete="off"
					/>
					<button
						type="submit"
						className="search-button"
						aria-label="Search weather"
					>
						<FiSearch size={18} />
					</button>
				</form>
			</div>

			{error && <div className="error-message">{error}</div>}
			{weather && <Weather weather={weather} />}
		</div>
	);
}

export default App;
