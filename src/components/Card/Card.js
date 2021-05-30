import React from 'react';
import styled from 'styled-components';
import TextLine from '../TextLine/TextLine'
import Icon from '../WeatherIcon/Icon'
import Helpers from '../../helpers/index'

const CardTemp = styled.div`

 opacity: 0.4;
    border-radius: 0.85rem;
    background-color: ivory;
    color: #000000;
    font-weight: bold;
    height: 25vh;
    width: 45vw;
    text-align: center;
    display: flex;
    justify-content:space-around;
    padding-top: 15px;
  @media (max-width: 768px) {
    width: 88vw;
    height: 20vh;
    margin: 0;
  }
`;
const Container = styled.div`
 margin-top:10px;
       display: flex;
    width: 100vw;
    height: 40vh;
    flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
 
margin:0;
}`;

const DivOne = styled.div`
    Height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const DivTwo = styled.div`
 Height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const DivThree = styled.div`
  Height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 5vw;
`;

const Wrap=styled.div`
    width: 50vw;
    display: flex;
    color:white;
    justify-content: center;
    padding-top: 40px;
    @media (max-width: 768px) {
padding:0;
}`;
const WrapTwo=styled.div`
display:block;
height:20vh;
`;
export default function Card({CurrentConditions,DaliyForcast}) {
 let rise=( DaliyForcast.DailyForecasts[0]?.Sun.Rise).slice(11,16)
 let set=( DaliyForcast.DailyForecasts[0]?.Sun.Set).slice(11,16)
  return (
  
    <Container>
       <Wrap> 
      <Icon
    src={Helpers.GetIcon( CurrentConditions.WeatherIcon)}
    width={'20vw'}
    height={'20vh'}
    />
    <WrapTwo> 
    <TextLine
    text={CurrentConditions.Temperature?.Metric.Value}
    fontsize={'large'}
    degree
    /> 
    <TextLine
    fontsize={'medium'}
    height={'10vh'}
    text= {CurrentConditions.WeatherText}
    />

    </WrapTwo>
    </Wrap>

      <CardTemp>
        <DivOne>
          <TextLine text={DaliyForcast.DailyForecasts[0]?.Temperature.Maximum.Value}   degree />
          <TextLine text={'Hight'} />
          <TextLine  text={DaliyForcast.DailyForecasts[0]?.Temperature.Minimum.Value}   degree />
          <TextLine text={'Low'}/>
        </DivOne>

        <DivTwo>
          <TextLine text={`${DaliyForcast.DailyForecasts[0].Day.Wind.Speed.Value} mi/h`}  />
          <TextLine text={'Wind'} />
          <TextLine text={`${DaliyForcast.DailyForecasts[0]?.Day.RainProbability } % `}/>
          <TextLine text={'Rain'} />
        </DivTwo>

        <DivThree>
          <TextLine text={rise} />
          <TextLine text={'Sunrise'} />
          <TextLine text={set}/>
          <TextLine text={'Sunset'} />
        </DivThree>
      </CardTemp>
  
    </Container>
   
  );
}
