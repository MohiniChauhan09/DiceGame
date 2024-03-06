import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector"
import styled from 'styled-components'
import RollDice from "./RollDice";
import {  useState } from "react";
import { OutlineButton } from "../styled/Button";

import { Button } from "../styled/Button"
import Rules from "./Rules";

const GamePlay =() => {
  const [ score ,  setScore  ]=useState(0);
  const [ currentDice , setCurrentDice ] = useState(1);
  const[selectedNumber,setSelectedNumber] = useState(); 
  const[error,setError] =useState();
  const [showRules,setShowRules] = useState(false);

  const rollDice=()=>{
    if(! selectedNumber){
      setError("Please select any number")
      return;
    }else{
      setError("")
    }

    const randomNumber=Math.floor((Math.random()*6)+1)
    setCurrentDice( (prev)=>randomNumber);

    if(selectedNumber === randomNumber){
      setScore( (prev)=> prev + randomNumber)
    }else{
      setScore((prev)=> prev - 2)
    }

    setSelectedNumber(undefined)
  };

  const resetScore=()=>{
    setScore(0);
  }

    
  return (
    <MainContainer>   
        <div className="top_section">
            <TotalScore 
            score={score}
            />

            <NumberSelector
            error={error} 
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber} />
        </div>

        <RollDice
        currentDice={currentDice} 
        rollDice={rollDice}
        />

        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={ ()=> { setShowRules( (prev) => !prev ) }} >
          { showRules ? "Hide " : "Show " }Rules</Button>
        </div>

        { showRules && <Rules/> }
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer=styled.div`

  .top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;
  }

  .btns{
    margin-top:10px;
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
  
`;