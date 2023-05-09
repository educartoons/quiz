import React from 'react';
import styled from '@emotion/styled';

const StepperStyled = styled.div`
  border-bottom: 2px solid #F0F0F0;
  margin-bottom: 2em;
  padding: 0 0 1em 0;
  position: relative;
  z-index: 1;
`;

const ProgressStyled = styled.div`
  background-color: #44B029;
  display: block;
  height: 2px;
  bottom: -2px;
  position: absolute;
  left: 0;
  width: ${(props)=> `${props.width}%`};
  z-index: 10;
`

const Span = styled.span`
  color: #C3CBCF;
`;

function Stepper(props){
  const {position, length} = props;

  return <StepperStyled>
  Question {position+1} <Span>of {length}</Span>
  <ProgressStyled width={Number.parseFloat((position+1)/length*100)}/>
</StepperStyled>
}

export default Stepper;