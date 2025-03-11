import { useState } from 'react';

function Weather({ weather }) {
	const [isFah, setIsFah] = useState(false);
	const temperature = isFah ? (weather.temp * 9) / 5 + 32 : weather.temp;

	return (
		<div className="card">
			<h1 className="card_title">Weather App</h1>
			<p className="card_subtitle">
				{weather.city}, {weather.country}
			</p>
			<div className="card_info">
				<span role="img" aria-label="icon" style={{ fontSize: '3rem' }}>
					{weather.icon}
				</span>
				<div className="card_info-data">
					<h2 className="card_info-description">"{weather.description}"</h2>
					<ul className="card_info-list">
						<li className="card_info-list-item">
							Wind Speed <strong>{weather.wind}m/s</strong>
						</li>
						<li className="card_info-list-item">
							Clouds <strong>{weather.clouds}%</strong>
						</li>
						<li className="card_info-list-item">
							Pressure <strong>{weather.pressure}hPa</strong>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h3>
					{Math.ceil(temperature)} {isFah ? 'ºF' : 'ºC'}
				</h3>
				<button onClick={() => setIsFah(!isFah)} className="button">
					Change to {isFah ? 'Celcius' : 'Fahrenheit'}
				</button>
			</div>
		</div>
	);
}

export default Weather;
