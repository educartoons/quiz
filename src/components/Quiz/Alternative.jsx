import React from 'react';
import styled from '@emotion/styled';

export const AlternativeStyled = styled.li`
  background-color: ${(props)=> props.marked ? '#44B029': 'white'};
  border-radius: 5px;
  border: 1px solid ${(props)=>props.marked ? '#44B029': '#E5E5E5'};
  color: ${(props)=> props.marked ? 'white' : 'black'};
  display: block;
  font-weight: 300;
  padding: 1em 1em;
  margin: 0 0 0.5em 0;
  &:hover{
    background-color: #44B029;
    border: 1px solid #44B029;
    color: white;
  }
`

export const AlternativesContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Alternative(props){
  const {handleClick, index, marked} = props;
  return <AlternativeStyled marked={marked} onClick={()=>{handleClick(index)}}>{props.alternative}</AlternativeStyled>
}
