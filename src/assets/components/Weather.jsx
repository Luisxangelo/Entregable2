import { useState } from "react"
import { kelvinToCelsius, kelvinToFarenheit } from "../utils/temps"

const  weaatherImage ={
    "04n" :"/image/wheatericons/rainimg.png"

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
        <h2 className="font-bold text-2xl">{weatherInfo?.name},{weatherInfo?.sys.country}</h2>
        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
            {/* Seccion arriba */}
            <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">
            <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
                <span className="text-4xl">{iCelsius? kelvinToCelsius(weatherInfo?.main.temp):kelvinToFarenheit(weatherInfo?.main.temp)}</span>
                <div>
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

        <button onClick={handleChangeTemp}>Change °C / °F</button>

    </section>
  )
}

export default Weather