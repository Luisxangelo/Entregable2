import { useState } from "react"

const weatheeimages ={}

const Weather = ({weatherInfo}) => {

const [iCeslsius, seiCeslsiust] = useState(true)

const handleChangeTemp = () =>{
    seiCeslsiust(!iCeslsius)
}

console.log(weatherInfo)
  return (
    <section className="text-center grid gap-6">
        <h2 className="font-bold text-2xl">{weatherInfo?.name},{weatherInfo?.sys.country}</h2>
        <section className="grid gap-4 sm:grid-cols-[1fr_auto]">
            {/* Seccion arriba */}
            <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center">
            <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>
                <span className="text-4xl">{iCeslsius?"":""}</span>
                <div>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>

            </article>
             {/* Seccion abajo */}
            <section className="bg-white/70 p-2 " >
                <article>

                    <article className="">
                        <div>
                            <img src="/image/wind.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed} m/s</span>
                    </article>

                    <article className="">
                        <div>
                            <img src="/image/water.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity} %</span>
                    </article>
                    
                    <article className="">
                        <div>
                            <img src="/image/pressure.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure} p</span>
                    </article>

                </article>

            </section>
                
        </section>

        <button>Change F/C</button>

    </section>
  )
}

export default Weather