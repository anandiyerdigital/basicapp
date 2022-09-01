import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

const Header = (props) => {

    const onClick =() => {
        console.log("clicked")
    }


  return (
    <header className='header'>
    <h1>{props.title}</h1>
    <Button color="green" text="Click Me" onClick={onClick} />  
    <Button color="red" text="Second Me" />  
    <Button color="yellow" text="Third Me" />  <br></br>
    
   
    </header>
  )
}

export default Header