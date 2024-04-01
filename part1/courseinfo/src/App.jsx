const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part text = {props.courses[0].name} number = {props.courses[0].number}/>
      <Part text = {props.courses[1].name} number = {props.courses[1].number}/>
      <Part text = {props.courses[2].name} number = {props.courses[2].number}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <><p>{props.text} {props.number}</p></>
  )
}

const Total = (props) => {
  return (
    <><p>{props.text} {props.total[0].number + props.total[1].number +props.total[2].number }</p></>
  )
}


const App = () => {
  const course = {name: 'Half Stack application development',
parts: [{name: 'Fundamentals of React', number: 10},
{name: 'Using props to pass data', number: 7},
{name: 'State of a component', number: 14}]}
  return (
    <div>
      <Header course={course.name} />
      <Content courses = {course.parts} />
      <Total text = 'Number of exercises' total = {course.parts} />
    </div>
  )
}

export default App