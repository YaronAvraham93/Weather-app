import React from 'react';
import ForcastCard from '../ForcastCard/ForcastCard'
import styled from 'styled-components';
import Helpers from '../../Helpers/Index'
const Container = styled.div`
display:flex;
padding-top: 65px;
  @media (max-width: 768px) {
    overflow-x: scroll;
    display: flex;
    padding-top: 90px;
}
`
export default function ForecastList({HoursfHourly12}) {
 

  return (
    <Container>
      {HoursfHourly12.map((item, index) => {
        
        return (
       
          <div key={index}>
            <ForcastCard  
            date={Helpers.GetDate(item.DateTime,'date')}
            time={Helpers.GetDate(item.DateTime,'time') }
            icon={Helpers.GetIcon(  item.WeatherIcon )}
            temperatura={item.Temperature.Value}
            />
            
          </div>
        );
      })}
      </Container>
  );
}
