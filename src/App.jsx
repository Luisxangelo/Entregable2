import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Weather from "./assets/components/Weather.jsx"
import Loader from "./assets/components/loader.jsx"

function App() {

  const[weatherInfo, setWeatherInfo] = useState(null)
  
  const success = (pos) => {

    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY ="666f339c17cbc8d66b94a21aa7f5e019"

    const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
          .then(({data}) => setWeatherInfo(data))
          .catch((err) => console.log(err))

  }

  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(success)

  }, [])

  return (
    <>
    <main className='min-h-screen text-black flex justify-center items-center font-principal-font p-2 bg-[url(/bgimage/bgclearsky.jpg)] bg-auto bg-no-repeat bg-center'>

    {
      weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader/>
    }


    </main>
    </>
  )
}

export default App
