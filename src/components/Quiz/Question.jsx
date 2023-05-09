import React, {useState, useEffect} from 'react';
import Alternative, {AlternativesContainer} from './Alternative'
import Stepper from './Stepper';

export default function Question(props){
  const {question, alternatives} = props.question;
  const { position, length} = props;
  const [marked, setMarked] = useState(-1);

  const handleClick = (idx) => {
    setMarked(idx);
  }

  useEffect(()=>{
    setMarked(-1)
  }, [question])

  return <>
    <h2>{question}</h2>
    <p>Answer and get points</p>
    <Stepper position={position} length={length}/>
    <AlternativesContainer>
      {
        alternatives.map((alternative, idx)=><Alternative key={idx} marked={idx===marked} alternative={alternative} index={idx} handleClick={handleClick}/>)
      }
    </AlternativesContainer>
  </>
}