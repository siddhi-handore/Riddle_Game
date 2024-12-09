import React,{useEffect, useState} from 'react'
import { FcAlarmClock } from "react-icons/fc";
const Guess = (props) => {
  const [changeIcon,setChangeIcon] = useState(false);
  const [answer,setAnswer] = useState('');
  const [showAnswer,setShowAnswer] = useState(false);
  const [win,setWin] = useState(false);
  const [count,setCount] = useState(0);
  console.log(props.op);
  useEffect(()=>{
    setChangeIcon(false);
    setAnswer('');
    setShowAnswer(false);
    setWin(false);
    setCount(0); // Reset timer when props.func changes
    const time = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 30) {
          return prevCount + 1;
        } else {
          setShowAnswer(true);
          clearInterval(time); // Clear interval once it reaches 30 seconds
          return prevCount;
        }
      });
    }, 1000);

    return () => clearInterval(time);
  },[props.func])
  const getData = (e)=>{
    if(e.key === "Enter")
    {
        const ans = e.target.value.trim();
        setAnswer(ans);
        e.target.value = "";
        if(ans === props.op)
        {
          setWin(true);
          setShowAnswer(false);
        }
        else{
          setShowAnswer(true);
          setWin(false);
        }
    }
  }
  const idea1 = ()=>{
    setChangeIcon(true);
  }
  const idea2 = ()=>{
    setChangeIcon(false);
  }
  return (
    <div className="answer">
      {!showAnswer && !win && (<>
        <div className="time">
      <FcAlarmClock className="icon"/>
        <h1>:</h1>
        <h1>{count}</h1>
      </div>
        <div className="inpt">
            {!changeIcon && (<h1>🤔</h1>)}
            {changeIcon && (<h1>💡</h1>)}
            <input type="text" onFocus={idea1} onBlur={idea2} onKeyDown={getData} placeholder="Guess what is it ....?"></input>
        </div>
        </>)}
        {!win && showAnswer && (
          <div className="real">
            <h1>{props.op}</h1>
            <h2>Ohh You Lose👎</h2>
          </div>
        )}
        {win && !showAnswer && (
          <div className="real">
            <h1>You Won 🎉</h1>
            <h2>That's Correct</h2>
          </div>
        )
        }
        </div>
  )
}

export default Guess