import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
background: ${(props) => props.color};
height: 15px;
width: 15px;
border-radius: 10px;
margin: 10px;

`;
const StyledText = styled.p`
front-size: 20px;
display: flex;

`;

export default function InfoBar(props) {
  const {
    color, name, value, percent
  } = props;

  return (
    <>
      <StyledLogo color={color} />
      <StyledText>
        {name}
        :

        {value}

        (
        {percent}
        %)
      </StyledText>
    </>

  );
}
