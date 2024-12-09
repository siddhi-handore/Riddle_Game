import React from 'react'
import image from './new_monkey.png'
const AskRiddle = (props) => {
  return (
    <>
    <div className="rid">
      <div className="name">
        <span>R</span>
        <span>I</span>
        <span>D</span>
        <span>D</span>
        <span>L</span>
        <span>E</span>
      </div>
      <div className="question">
      {!props.load && 
        (<h1>{props.question}</h1>)
      }
      {props.load && 
        <img src={image} alt='monkey'/>
      }
      </div>
    </div>
    </>
  )
}

export default AskRiddle
