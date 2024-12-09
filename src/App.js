import { useEffect,useState} from 'react';
import AskRiddle from './Components/AskRiddle.js'
import Guess from './Components/Guess.js'
function App() {
  const [riddle,setRiddle] = useState('');
  const [output,setOutput] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const reset = ()=>{
    setRiddle("");
    setOutput("");
    setIsLoading(true);
  }
    const getRiddle = ()=>{
      reset();
      setIsLoading(true);
      fetch('https://api.api-ninjas.com/v1/riddles',{
        headers:{
          'X-Api-Key': 'SqjOWg2n9i3NgHJaV8f/hw==p4b6n0G2MdhapMVB'
        }
      })
      .then((response) => response.json())
      .then((data)=>{
        const qst = data[0].question;
        if(qst.length > 60)
        {
          setIsLoading(true);
          getRiddle();
        }
        else if(riddle.length <=60){
          setIsLoading(false);
          setRiddle(data[0].question);
          console.log(riddle);
          setOutput((data[0].answer).toLowerCase());
          console.log(output);
        }
        else{
          console.error("Error Fetching");
        }
      })
    }
    useEffect(()=>{
      getRiddle();
    },[]);
  return (
    <>
      <AskRiddle question={riddle} load={isLoading}/>
      <Guess op={output} func={reset}/>
      <div className="btn">
      <button onClick={getRiddle}>Next</button>
      </div>
    </>
  )
}

export default App;
