import { useState } from 'react';
import {
	WiDaySunny,
	WiRain,
	WiSnow,
	WiCloudy,
	WiThunderstorm,
	WiDayCloudy,
	WiFog,
	WiHumidity,
	WiStrongWind,
	WiBarometer,
	WiThermometer,
	WiCelsius,
	WiFahrenheit,
} from 'react-icons/wi';
import { FiNavigation } from 'react-icons/fi';

const WeatherIcon = ({ type }) => {
	const iconSize = 65; // Icono más grande

	switch (type) {
		case 'thunderstorm':
			return <WiThunderstorm size={iconSize} />;
		case 'drizzle':
			return <WiRain size={iconSize} />;
		case 'rain':
			return <WiRain size={iconSize} />;
		case 'snow':
			return <WiSnow size={iconSize} />;
		case 'atmosphere':
			return <WiFog size={iconSize} />;
		case 'clear':
			return <WiDaySunny size={iconSize} />;
		case 'clouds':
			return <WiCloudy size={iconSize} />;
		default:
			return <WiDayCloudy size={iconSize} />;
	}
};

function Weather({ weather }) {
	const [isFah, setIsFah] = useState(false);
	const temperature = isFah ? (weather.temp * 9) / 5 + 32 : weather.temp;

	return (
		<div className="card">
			<h1 className="card_title">Weather App</h1>
			<p className="card_subtitle">
				<FiNavigation size={20} /> {weather.city}, {weather.country}
			</p>

			<div className="weather-icon">
				<WeatherIcon type={weather.iconType} />
			</div>

			<h2 className="card_info-description">{weather.description}</h2>

			<div className="card_info">
				<div className="card_info-data">
					<ul className="card_info-list">
						<li className="card_info-list-item">
							<span>Temperature</span>
							<strong>
								<WiThermometer size={28} />
								{Math.round(temperature)}°{isFah ? 'F' : 'C'}
							</strong>
						</li>

						<li className="card_info-list-item">
							<span>Humidity</span>
							<strong>
								<WiHumidity size={28} /> {weather.humidity}%
							</strong>
						</li>

						<li className="card_info-list-item">
							<span>Wind</span>
							<strong>
								<WiStrongWind size={28} /> {weather.wind} m/s
							</strong>
						</li>

						<li className="card_info-list-item">
							<span>Pressure</span>
							<strong>
								<WiBarometer size={28} /> {weather.pressure} hPa
							</strong>
						</li>
					</ul>
				</div>
			</div>

			<button onClick={() => setIsFah(!isFah)} className="button">
				{isFah ? (
					<>
						<WiCelsius size={40} /> Switch to Celsius
					</>
				) : (
					<>
						<WiFahrenheit size={40} /> Switch to Fahrenheit
					</>
				)}
			</button>
		</div>
	);
}

export default Weather;
