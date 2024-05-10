import axios from "axios"
import { useEffect, useState } from "react"



const LanguageLine = ({language}) => {
  const LineStyle = {
    paddingLeft: 20
  }

  return (
     <div>
      <li style={LineStyle}>
        {language}
      </li>
     </div>
  )
}



const CountryDisplay = ({ name, apiKey }) => {
  const [capital, setCapital] = useState('')
  const [area, setArea] = useState('')
  const [languages, setLanguages] = useState([])
  const [flag, setFlag] = useState([])
  const [temperature, setTemperature] = useState([])
  const [wind, setWind] = useState([])
  const [icon, setIcon] = useState([])


  const FlagStyle = {
    paddingTop: 20
  }


  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    .then(response => {
      setCapital(response.data.capital[0])
      setArea(response.data.area)
        const languagesDict = response.data.languages
        const newLanguages = Object.values(languagesDict)
        setLanguages(languages.concat(newLanguages))
        setFlag(response.data.flags.png)
        const newLat = response.data.capitalInfo.latlng[0]
        const newLong = response.data.capitalInfo.latlng[1]
        /*const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${newLat}&lon=${newLong}&units=metric&exclude=hourly,daily&appid=${apiKey}`*/
        const weatherURL = `https://api.openweathermap.org/data/2.5/find?lat=${newLat}&lon=${newLong}&units=metric&exclude=hourly,daily&appid=${apiKey}`
        console.log(weatherURL);
        axios.get(weatherURL)
        .then(response => {
          setTemperature(response.data.list[0].main.temp)
          setWind(response.data.list[0].wind.speed)
          console.log(response.data.list[0].weather[0].icon);
          setIcon(response.data.list[0].weather[0].icon)
        })

    })
  },[])


  console.log("capital is", capital)

  return (
    <div>
      <h1>{name}</h1>
      <div>
        capital {capital}
      </div>
      <div>
        area {area}
      </div>
      <div>
        <h4>languages:</h4>
      </div>
      <div>
        {languages.map(language => {
          return (
            <LanguageLine language = {language} key = {language} />
          )
        })}
      </div>
      <div>
        <img style = {FlagStyle} src={flag} />
      </div>
      <div>
        <h2>Weather in {capital}</h2>
      </div>
      <div>
        temperature {temperature} Celcius
      </div>
      <div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
      </div>
      <div>
        wind {wind} m/s
      </div>
    </div>
  )
}

export default CountryDisplay