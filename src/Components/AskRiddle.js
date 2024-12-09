import React from 'react'
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
        (<img src="/new_monkey.png" alt="monkey"></img>)
      }
      </div>
    </div>
    </>
  )
}

export default AskRiddle