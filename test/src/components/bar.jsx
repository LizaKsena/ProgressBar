import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
background: ${(props) => props.color};
height: 30px;
width: 15px;
border-radius: 10px;
margin-left: 2px;
`;

export default function ProgressBar(props) {
  const { color, value } = props;

  return (
    <StyledBar color={color} />
  );
}
