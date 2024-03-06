import styled from 'styled-components'
import { useState} from 'react';

function RollDice({ currentDice , rollDice}) {
   return ( 
    <DiceContainer>
        <div className='dice' onClick={rollDice} >
            <img src={ `/images/dice/dice_${currentDice}.png` } alt="" />
        </div>
        
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  // margin-top:44px;

  .dice{
    cursor:pointer;
  }
  p{
    margin-top:0;
    font-size:20px;
  }

`;