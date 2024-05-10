import CountryDisplay from "./CountryDisplay";

const Display = ({ countries, setCountries, apiKey }) => {
  console.log(countries.length);
  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
  else if (countries.length > 1) {
    console.log(`length is ${countries.length}`);
    return (
      <div>
        {
          countries.map(
            (country) => {
              return (
                <CountryLine name = {country} key = {country} setCountries = {setCountries} />
              )
            })
        }
      </div>
    )
  }
  else if (countries.length == 1) {
    console.log(`displaying ${countries} only`)
    return (
      <CountryDisplay name = {countries[0]} apiKey = {apiKey}/>
    )
  }
}

const CountryLine = ({ name, setCountries }) => {
  const handleClick = () => {
    setCountries([name])
  }


  return (
    <div>
      {name} 
      <button onClick = {handleClick}>show</button>
    </div>
  )
}



export default Display