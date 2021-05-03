import React from 'react';
import WeatherPage from './pages/WeatherPage';
import styled from 'styled-components';
import image from './assets/images/homePagebj.jpg';

const Container = styled.div`
  background-image: url(${image});
  width: 100vw;
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
      <WeatherPage />
    </Container>
   
  );
}

export default App;
