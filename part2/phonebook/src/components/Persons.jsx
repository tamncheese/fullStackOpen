import DeleteButton from "./DeleteButton"
import phonebookService from "../services/phonebook"

const Persons = ({persons, filter, setPersons}) => {
  const handleClick = ({id, name}) => {
    /*console.log('delete clicked')*/
    if(window.confirm(`Delete ${name} ?`)) {
      phonebookService.deletePerson(id = {id})
      .then(returnedPerson => {
        const index = persons.findIndex(n => n.id === returnedPerson.id)
        const newPersons = persons.toSpliced(index, 1)
        setPersons(newPersons)
      })
    }
  }

  if (filter === '') {
    return (
      <div>
        {persons.map(
          person => <Person name = {person.name} key = {person.name} number = {person.number} id = {person.id} handleClick = {handleClick}/>
        )}
      </div>
    )
  }
  else {
    const filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(filter)})
    console.log('Filtered array is: ', filteredPersons);
    return (
      <div>
      {
        filteredPersons.map(
          (person) => {
            return(
              <Person name = {person.name} key = {person.name} number = {person.number} id = {person.id} 
              handleClick = {handleClick} />
            )}
      )}
    </div>
    )
  }
}





const Person = ({name, number, id, handleClick}) => {
    return (
      <div>
      {name} {number} <DeleteButton id = {id} handleClick = {() => handleClick({id, name})}  />
      </div>
    )
}
export default Persons