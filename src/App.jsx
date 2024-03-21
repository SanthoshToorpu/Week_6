import React from 'react'

const App = () => {
  return (
    <div>
      <Header title="Welcome to My New Assignment"></Header>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

export default App
