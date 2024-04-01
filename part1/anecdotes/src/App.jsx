import { useState } from 'react'

const Button = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button>

const Header = ({text}) =>
  <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteArray, setArray] = useState(new Uint32Array(anecdotes.length))
  const [maxAnecdote, setMaxAnecdote] = useState(0)

  const generateRandomNumber = () => {
    /*random number formula from Mozilla*/
    const min = 0
    const max = anecdotes.length
    const newNum = Math.floor(Math.random() * (max-min) + min)
    return newNum
  }

  const handleAnecdoteClick = () => {
    const newNum = generateRandomNumber()
    setSelected(newNum)
  }

  const handleVoteClick = () => {
    const copyArray = [...voteArray]
    copyArray[selected] += 1
    /*console.log("Anecdote " + selected + " vote increased by 1 to " + copyArray[selected])*/
    setArray(copyArray)
    const max = Math.max(...copyArray)
    const ind = copyArray.indexOf(max)
    setMaxAnecdote(ind)
    console.log(copyArray)
    console.log("Max vote is " + max)
    console.log("Index is " + {ind})
  }

  return (
    <div>
      <Header text = "Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {voteArray[selected]} votes</div>
      <Button handleClick={handleVoteClick} text = "vote"/>
      <Button handleClick={handleAnecdoteClick} text = "next anecdote"/>
      <Header text = "Anecdote with the most votes" />
      <div>{anecdotes[maxAnecdote]}</div>
      <div>has {voteArray[maxAnecdote]} votes</div>
    </div>
  )
}

export default App