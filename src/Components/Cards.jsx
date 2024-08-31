import React from 'react'
import { useState } from 'react'

export default function Cards() {
  const [count,setVal] = useState(0);
  return (
        <div className="cards-container">
        <div className="card">
            <h3>Card {count}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className="card-button" onClick={()=>{setVal(count + 1)}}>Increment</button>
            <button className="card-button" onClick={()=>{setVal(count - 1)}}>Decrement</button>
            <button className="card-button" onClick={()=>{setVal(0)}}>Default</button>
        </div>
        <div className="card">
            <h3>Card 2</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className="card-button">Learn More</button>
        </div>
        <div className="card">
            <h3>Card 3</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className="card-button">Learn More</button>
        </div>
    </div>
  )
}
