import { useState, useEffect } from 'react'
import CountryFilter from './components/CountryFilter'
import axios from 'axios'
import Display from './components/Display'


const App = () => {
  const api_key = import.meta.env.VITE_SOME_KEY
  const [countryFilter, setCountryFilter] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    console.log('effect run, country is now', countryFilter)
    if (countryFilter) {
      console.log('fetching country data...')
      findCountry()
    }
  }, [countryFilter])

  const findCountry = () => {
    let newCountries = []
    console.log('finding countries...')
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        response.data.forEach(element => {
          const name = element.name.common
          const nameLowered = name.toLowerCase()
          if (nameLowered.includes(countryFilter.toLowerCase())) {
            console.log(`going through country ${name}`)
            newCountries = newCountries.concat(name)

          }
          setCountries(newCountries)

        });
      })
  }

  return (
    <div>
      <CountryFilter newCountryFilter={countryFilter} setCountryFilter={setCountryFilter} />
      <Display countries={countries} setCountries = {setCountries} apiKey = {api_key}/>
    </div>
  )



}
export default App
