import React, {useState} from 'react';
import { ButtonStyled } from './Button';
import Question from './Question';

const QUESTIONS = [
  {
    question: `What's your expertise 1?`,
    alternatives: [
      'Data Analist 1',
      'Arts & Culture 1',
      'IT Infrastructure 1',
      'MySQL Admin 1'
    ],
  },
  {
    question: `What's your expertise 2?`,
    alternatives: [
      'Data Analist 2',
      'Arts & Culture 2',
      'IT Infrastructure 2',
      'MySQL Admin 2'
    ],
  },
  {
    question: `What's your expertise 3?`,
    alternatives: [
      'Data Analist 3',
      'Arts & Culture 3',
      'IT Infrastructure 3',
      'MySQL Admin 3'
    ],
  },
  {
    question: `What's your expertise?`,
    alternatives: [
      'Data Analist',
      'Arts & Culture',
      'IT Infrastructure',
      'MySQL Admin'
    ],
  },
  {
    question: `What's your expertise?`,
    alternatives: [
      'Data Analist',
      'Arts & Culture',
      'IT Infrastructure',
      'MySQL Admin'
    ],
  },
  {
    question: `What's your expertise?`,
    alternatives: [
      'Data Analist',
      'Arts & Culture',
      'IT Infrastructure',
      'MySQL Admin'
    ],
  },
  {
    question: `What's your expertise?`,
    alternatives: [
      'Data Analist',
      'Arts & Culture',
      'IT Infrastructure',
      'MySQL Admin'
    ],
  }
]

function Quiz(props){
  const [position, setPosition] = useState(0);

  const handlePosition = () => {
    setPosition(position+1)
  }

  console.log(position)

  return <>
    <Question position={position} length={QUESTIONS.length} question={QUESTIONS[position]}/>
    <div>
      <ButtonStyled onClick={handlePosition}>Next</ButtonStyled>
    </div>
  </>
}

export default Quiz;