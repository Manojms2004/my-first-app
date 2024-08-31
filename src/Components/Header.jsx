import React from 'react'

export default function Header(data) {
  const myFunction = () =>{
    const names = ["Manoj","Harish","Venkat"]
    const genVal = Math.floor(Math.random()*3)
    return names[genVal]
  }
  return (
    <header>
        <h1>Welcome to React</h1>
        <p>Hi {myFunction()}</p>
    </header>
  )
}
