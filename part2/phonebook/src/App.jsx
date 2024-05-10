import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import phoneBookService from './services/phonebook'
import Notification from './components/Notification'
const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    phoneBookService.getAll()
    .then(initialPersons => {setPersons(initialPersons)})
    },[])
    
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setNotification] = useState('some error')

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {errorMessage}/>
      <Filter newfilter = {newFilter} setFilter = {setFilter}/>
      <h2>add a new</h2>
      <PersonForm persons = {persons} setPersons = {setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter = {newFilter} setPersons = {setPersons}/>
    </div>
  )
}

export default App