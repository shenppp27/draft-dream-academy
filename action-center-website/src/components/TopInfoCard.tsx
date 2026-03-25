import './TopInfoCard.css'
import { useEffect, useMemo, useState } from 'react'
import actionLogo from '../assets/actioncenter-logo-enhance.png'

type WeatherState = {
  temperature: string
  icon: string
  location: string
}

function getWeatherIcon(weatherCode: number) {
  if (weatherCode === 0) return '☀'
  if ([1, 2, 3].includes(weatherCode)) return '⛅'
  if ([45, 48].includes(weatherCode)) return '🌫'
  if ([51, 53, 55, 56, 57].includes(weatherCode)) return '🌦'
  if ([61, 63, 65, 66, 80, 81, 82].includes(weatherCode)) return '🌧'
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return '❄'
  if ([95, 96, 99].includes(weatherCode)) return '⛈'
  return '☼'
}

export default function TopInfoCard() {
  const [now, setNow] = useState(new Date())
  const [weather, setWeather] = useState<WeatherState>({
    temperature: '--°C',
    icon: '☀',
    location: 'BATANGAS',
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=13.7565&longitude=121.0583&current=temperature_2m,weather_code'
        )

        if (!response.ok) throw new Error('Weather fetch failed')

        const data = await response.json()
        const temp = Math.round(data.current.temperature_2m)
        const code = data.current.weather_code

        setWeather({
          temperature: `${temp}°C`,
          icon: getWeatherIcon(code),
          location: 'BATANGAS',
        })
      } catch (error) {
        console.error('Failed to fetch weather:', error)
      }
    }

    fetchWeather()
    const weatherTimer = setInterval(fetchWeather, 600000)

    return () => clearInterval(weatherTimer)
  }, [])

  const formattedDate = useMemo(() => {
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).toUpperCase()
  }, [now])

  const formattedTime = useMemo(() => {
    return now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    })
  }, [now])

  return (
    <aside className="top-info-card">
      <div className="top-info-date">{formattedDate}</div>

      <div className="top-info-main">
        <div className="top-info-time-block">
          <div className="top-info-time">{formattedTime}</div>
        </div>

        <div className="top-info-weather">
          <span className="top-info-weather-temp">
            {weather.temperature} {weather.icon}
          </span>
          <strong>{weather.location}</strong>
        </div>
      </div>

      <div className="top-info-logo-wrap">
        <img src={actionLogo} alt="ACTION Center Logo" className="top-info-logo-image" />
      </div>
    </aside>
  )
}