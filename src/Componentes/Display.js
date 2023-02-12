export default function Display ({data}){

    return (
        <div className="display">
            
            <div className="info">
            <h1 id="display-cidade">
                {data.name+", "+data.sys.country}
            </h1>
            <h2 className="display-temperatura">Temperatura: {data.main.temp} {'\u00b0'}C</h2>
            <h2 className="display-sensacao">Sensação Térmica: {data.main.feels_like} {'\u00b0'}C</h2>
            <h2 className="display-vento">Ventos: {data.wind.speed}km/h</h2>

        </div>


        <div className="img">
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="imagem tempo"/>
        </div>
            
        </div>
    )
}