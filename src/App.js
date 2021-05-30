import React from 'react';
import HomePage from './page/HomePage';
import styled from 'styled-components';
import image from './assets/images/homePagebj.jpg';

const Container = styled.div`
  background: url(${image}) center;
  width: 98vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media  (max-width: 768px) {
  flex-direction: column;
  align-items:center;
}
`;
function App() {
  return (

    <Container>
      <HomePage />
    </Container>
   
  );
}

export default App;
