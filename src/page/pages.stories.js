
import React from 'react';
import Typography from '../components/Typography/Typography';
import SearchBar from '../components/SearchBar/SearchBar';
import Location from '../components/Location/Location';
import Card from '../components/Card/Card';
import ForecastList from '../components/ForecastList/ForecastList';
import TypoOvercast from '../components/overcastCloud/OverCast'
import styled from 'styled-components';
import image from '../assets/images/homePagebj.jpg';

const Continer = styled.div`
  background-image: url(${image});
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export default {

    title: 'Pages/HomePage'

};

export const HomePage = () => (

    <Continer>
      <Typography label={'Weather-app'} />
      <SearchBar placeholder={'Search your country'} />
      <Location city={'New York US'} date={'Wednesday 1 April'} />
      <TypoOvercast number={'5'} />
      <Card tempNum={'7'} temptext={'Low'} text={'3.1mph'} label={'Wid'} am={'08:00'} sunState={'Sunrise'} />
      <ForecastList />


    </Continer>
)
