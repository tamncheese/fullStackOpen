const CountryFilter = ({ newCountryFilter, setCountryFilter }) => {
  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }
  return (
    <div>
      find countries
      <input value={newCountryFilter} onChange={handleCountryFilterChange} />
    </div>
  )
}

export default CountryFilter