cat << 'EOF' > README.md
# 🌤️ WeatherWise - Intuitive Weather Application

<div align="center">
  <img src="https://github.com/user-attachments/assets/8a275677-1320-4927-a67e-88f8414ebab2" width="550" style="border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)" alt="WeatherWise Screenshot">
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  ![React Version](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)
</div>

## ✨ Key Features

| 🌀 | 🔍 | 🌡️ |
|----|----|----|
| **Automatic location** detection | **Search** by city | **Celsius/Fahrenheit** conversion |

| 💧 | 💨 | 📊 |
|----|----|----|
| **Humidity** & precipitation | **Wind speed** | **Atmospheric pressure** |

## 🛠️ Technologies Used

<div align="center">

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![OpenWeather](https://img.shields.io/badge/-OpenWeather-EE6C4D?logo=openweathermap&logoColor=white&style=for-the-badge)

</div>

## 🚀 Getting Started

```bash
# 1. Clone repository
git clone https://github.com/estefaniii/weather-app.git
cd weather-app

# 2. Install dependencies
npm install

# 3. Configure API key
echo "VITE_API_KEY=your_key_here" > .env

# 4. Start application
npm run dev
```

## 🎨 Interface Design

```jsx
// Example temperature component
function TemperatureDisplay({ temp, unit }) {
  return (
    <div className="temp-card">
      <WiThermometer size={60} />
      <h2>{Math.round(temp)}°{unit}</h2>
      <p>Feels like: {feelsLike}°</p>
    </div>
  );
}
```

## 📊 Project Structure

```
src/
├── assets/           
    └── styles/       # CSS styles
├── components/       # Reusable components
│   └──WeatherCard.jsx
├── hooks/            # Custom hooks
└── utils/            # Helper functions
```

## 🤝 How to Contribute?

1. Fork the project
2. Create a branch (\`git checkout -b feature/new-feature\`)
3. Commit your changes (\`git commit -m 'Add new feature'\`)
4. Push to the branch (\`git push origin feature/new-feature\`)
5. Open a Pull Request

## 💖 Support This Project

If you find this application useful, consider supporting its development:

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-00457C?style=for-the-badge&logo=paypal)](https://paypal.me/estefanniii?country.x=PA&locale.x=es_XC)

---

<div align="center">
  <p>✨ Made with ❤️ by Estefani</p>
</div>
EOF
