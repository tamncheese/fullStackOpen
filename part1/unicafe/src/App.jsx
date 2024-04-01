import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Button = ({handleClick, text}) =>
    <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) =>
    <div>{text} {value}</div>

const StatisticName = ({text}) =>
    <td>{text}</td>    

const StatisticValue = ({value}) =>
    <td>{value}</td>

const Statistic = ({good, neutral, bad, total}) => {
  const avg = (good-bad)/total
  const positive = good/total*100
  if (total > 0) {
    return(
      <div>
      <table>
        <tbody>
          <tr>
            <StatisticName text = 'good' />
            <StatisticValue value = {good} />
          </tr>
          <tr>
            <StatisticName text = 'neutral' />
            <StatisticValue value = {neutral} />
          </tr>
          <tr>
            <StatisticName text = 'bad' />
            <StatisticValue value = {bad} />
          </tr>
          <tr>
            <StatisticName text = 'average' />
            <StatisticValue value = {avg} />
          </tr>
          <tr>
            <StatisticName text = 'positive' />
            <StatisticValue value = {positive + ' %'} />
          </tr>
        </tbody>

      </table>
      </div>)
  }
  return(
    <div>No feedback given</div>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newgood = good + 1
    setGood(newgood)

  }

  const handleNeutralClick = () => {
    const newneutral = neutral + 1
    setNeutral(newneutral)
  }

  const handleBadClick = () => {
    const newbad = bad + 1
    setBad(newbad)
  }

  const total = bad + good + neutral
  return (
    <div>    
      <Header name = 'give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>
      <Header name = 'statistics'/>
      <Statistic good = {good} neutral = {neutral} bad = {bad} total = {total}/>
    </div>
  )
}

export default App