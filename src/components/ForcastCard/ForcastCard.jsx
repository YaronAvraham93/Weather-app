import React from 'react';
import styled from 'styled-components';
 import Icon from '../WeatherIcon/Icon'
import TextLine from '../TextLine/TextLine'


const Card = styled.div`
  opacity: 0.4;
  border-radius: 0.85rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: bold;
  height: 19vh;
    width: 90px;
  text-align: center;
  margin: 3px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;
const Date = styled.span`
font-size: 12px;
  display: block;
`;




function ForcastCard({date,time,icon,temperatura}) {
    return (
        <>
   
             <Card>
              <Date>{date}</Date>
              <Date>{time}  </Date>
               <Icon 
                 src= {icon}
                  width={'6vw'}
                  height={'7vh'}
              />
              <TextLine text={temperatura} degree /> 
            </Card>
     </>
    )
}

export default ForcastCard
