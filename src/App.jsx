import React, {useState} from 'react'


const App = () => {

  return (
    <div>
      <h1>Here Static components of a function ehich means the functional components whose props arent being changed are being re-rendereed</h1>
      <br />
      <br />
      <h1>We will be using react.memo to prevent rerender</h1>
      <Header title="Here the below header will be updated when a button is clicked"></Header>
      <HeaderwithButton title="Hallow No number"></HeaderwithButton>

    </div>
  )
}

const HeaderwithButton = (props)=>{

  const [title, setTitle] = useState(props.title)

  const updateTitle = () => {
    setTitle(Math.random()*10000)
  }


  return(
    <div style={{display:"flex", flexDirection:"column"}}>
      <button style={{maxWidth:"200px"}} onClick={updateTitle}>Update Header</button>
      {title}
    </div>
  )
}
const Header = React.memo((props) => {
  return(
    <div>
      {props.title}
    </div>
  )
})

export default App
