import { useState } from 'react'
import phoneBookService from '../services/phonebook'

const PersonForm = ({persons, setPersons, setNotification}) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
      setNewPhone(event.target.value)
    }
    const addPerson = (event) => {
      event.preventDefault()
      if (isPersonAdded() === true) {
        /*alert(`${newName} is already added to the phonebook`)*/
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const index = persons.findIndex(n => n.name.toLowerCase() === newName.toLowerCase())
          const updatedPersonObject = {
            id: persons[index].id,
            name: newName,
            number: newPhone
          }
          phoneBookService.update(updatedPersonObject)
          .then(returnedPerson => {
            const newPersons = [...persons]
            newPersons[index].number = returnedPerson.number
            setNotification(`Changed ${returnedPerson.name} number`)
            setPersons(newPersons)
            setNewName('')
            setNewPhone('')
            setTimeout(() => {
              setNotification(null)
            },5000)
          })
          .catch(error => {
            setNotification(`${updatedPersonObject.name} was already removed from server`)
            setTimeout(() => {
              setNotification(null)
            },5000)
          })
        }
        else {
          setNewName('')
          setNewPhone('')
        }
      }
      else {
        console.log("no same person");
        const PersonObject = {
          name: newName,
          number: newPhone
        }
        phoneBookService.create(PersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          setNotification(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          },5000)
        })
      }

    }
    const isPersonAdded = () => {
      for (let index = 0; index < persons.length; index++) {
        const name = persons[index].name;
        if (name.toLowerCase() === newName.toLowerCase()) {
          return true
        }
      }
      return false
    }
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }

export default PersonForm