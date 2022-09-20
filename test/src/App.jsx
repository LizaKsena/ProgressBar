import React from 'react';
import styled from 'styled-components';
import ProgressBar from './components/bar';
import InfoBar from './components/info';

const StyledProgressBar = styled.div`
display: flex;
`;
const StyledDiv = styled.div`
width: auto;
margin: 80px;
display: flex;
justify-content: center;
`;
const StyledInfo = styled.div`
width: auto;
display: row;
margin: 80px;
justify-content: center;
`;

function App() {
  const testData = [
    { name: 'sold', color: '#BD1FBE', value: 677 },
    { name: 'got free', color: '#FC64FF', value: 23 },
    { name: 'burned', color: '#00FF00', value: 202 },
    { name: 'free float', color: '#A9A9A9', value: 323 },
  ];

  const data = testData.map((i) => i.value);
  const sum = data.reduce((s, elem) => s + elem, 0);
  const persent = data.map((i) => Number((i * 100) / sum).toFixed(2));
  const arr = persent.map((i) => Math.ceil((i * 55) / 100));

  return (
    <>
      <StyledDiv>
        {testData.map((el, i) => (
          <StyledProgressBar>
            {Array.from({ length: arr[i] }, (_, index) => (
              <ProgressBar
                key={index}
                color={el.color}
              />
            ))}
          </StyledProgressBar>
        ))}

      </StyledDiv>

      <StyledInfo>
        {testData.map((el, index) => (
          <InfoBar
            color={el.color}
            name={el.name}
            value={el.value}
            percent={persent[index]}
          />
        ))}
      </StyledInfo>
    </>
  );
}

export default App;
