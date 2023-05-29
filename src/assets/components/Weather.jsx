import { useState } from "react"
import { kelvinToCelsius, kelvinToFarenheit } from "../utils/temps"
import loader from "./loader.jsx"

const  weaatherImage ={
    "01d" :"/image/wheatericons/clearskyd.png",
    "01n" :"/image/wheatericons/clearskyn.png",
    "02d" :"/image/wheatericons/fewscloudsd.png",
    "02n" :"/image/wheatericons/fewscloudsn.png",
    "03d" :"/image/wheatericons/scatteredcloudsd.png",
    "03n" :"/image/wheatericons/scatteredcloudsd.png",
    "04d" :"/image/wheatericons/brokencloudsn.png",
    "04n" :"/image/wheatericons/brokencloudsn.png",
    "09d" :"/image/wheatericons/showerraind.png",
    "09n" :"/image/wheatericons/showerraind.png",
    "10d" :"/image/wheatericons/raind.png",
    "10n" :"/image/wheatericons/rainn.png",
    "11d" :"/image/wheatericons/thunderstorm.png",
    "11n" :"/image/wheatericons/thunderstorm.png",
    "13d" :"/image/wheatericons/snowd.png",
    "13n" :"/image/wheatericons/snowd.png",
    "50d" :"/image/wheatericons/mist.png",
    "50n" :"/image/wheatericons/mist.png"
}

const Weather = ({weatherInfo}) => {
console.log(weatherInfo)
const [iCelsius, setCelsius] = useState(true)

const handleChangeTemp = () =>{
    setCelsius(!iCelsius)
}

console.log(weatherInfo)
  return (
    <section className="text-center grid gap-6">
        <loader />
        <h2 className="font-bold text-2xl">{weatherInfo?.name},{weatherInfo?.sys.country}</h2>
        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
            {/* Seccion arriba */}
            <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">
            <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
                <span className="text-4xl">{iCelsius? kelvinToCelsius(weatherInfo?.main.temp):kelvinToFarenheit(weatherInfo?.main.temp)}</span>
                <div className="p-4">
                <img src={weaatherImage[weatherInfo?.weather[0].icon]} alt="" />
                </div>

            </article>
             {/* Seccion abajo */}
            <section className="bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1  sm: items-center" >
                   
                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/image/wind.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed} m/s</span>
                    </article>

                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/image/water.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity} %</span>
                    </article>
                    
                    <article className="flex gap-2 sm:items-center">
                        <div>
                            <img src="/image/pressure.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure} p</span>
                    </article>

            </section>
                
        </section>
        <div className="justify-items-center">
        <button className="bg-white rounded-3xl h-34 w-36 shadow-xl text-sky-600" onClick={handleChangeTemp}>Change °C / °F</button>
        </div>
    </section>
  )
}

export default Weather