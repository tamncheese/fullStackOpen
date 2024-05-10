const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((partialSum, a) => partialSum + a, 0)
    return (
      <p><b>total of {total} exercises </b></p>
    )
  }
  
  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>    
        {parts.map(part =>
          <Part key={part.id} part = {part.name} exercises = {part.exercises}/>
        )}
      </div>
  
    )
  }
  
  const Header = ({name}) => {
    return(
      <h1>{name}</h1>
    )
  }
  
  const Course = ({course}) => {
  
    return(
      <div>
      <Header name  = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
      </div>
  
    )
  }

export default Course