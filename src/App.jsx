import {React, useState} from 'react'


const App = () => {

  const [title, setTitle] = useState('Initial Number')

  const updateTitle = () => {
    setTitle(Math.random()*10000)
  }

  return (
    <div>
      <h1>Create a button such that whwn clicked the header is updated with some random number</h1>
      <Header title="Here the below header will be updated when a button is clicked"></Header>
      <button onClick={updateTitle}>Update Header</button>
      <Header title={title}></Header>

    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      {props.title}
    </div>
  )
}

export default App
