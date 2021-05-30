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
  width: 45%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  @media (max-width: 768px) {
    width: 88%;
    height: 20%;
    margin: 0;
  }
`;
const Container = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
  }
`;

const SLowHight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SRainWind = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const SSetRise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Wrap = styled.div`
  width: 50%;
  height:1%;
  display: flex;
  color: white;
  justify-content: center;
  padding-top: 40px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const WrapTwo = styled.div`
  display: block;
  height: 20%;
`;
const Sunset = styled.div`
`;
const Sunrise = styled.div`
`;
const Low = styled.div`
`;
const Wind = styled.div`
`;
const Rain = styled.div`
`;
const Hight=styled.div``;
export default function Card({ CurrentConditions, DaliyForcast }) {
  const rise = (DaliyForcast.DailyForecasts[0]?.Sun.Rise).slice(11, 16);
  const set = (DaliyForcast.DailyForecasts[0]?.Sun.Set).slice(11, 16);
  return (
    <Container>
      <Wrap>
        <Icon src={Helpers.GetIcon(CurrentConditions.WeatherIcon)} width={'37%'} height={'37%'} />
        <WrapTwo>
          <TextLine text={CurrentConditions.Temperature?.Metric.Value} fontsize={'large'} degree />
          <TextLine fontsize={'medium'} height={'20%'} text={CurrentConditions.WeatherText} />
        </WrapTwo>
      </Wrap>

      <CardTemp>
        <SLowHight>
          <Hight>  
          <TextLine text={DaliyForcast.DailyForecasts[0]?.Temperature.Maximum.Value} degree />
          <TextLine text={'Hight'} />
          </Hight>
          <Low>
          <TextLine text={DaliyForcast.DailyForecasts[0]?.Temperature.Minimum.Value} degree />
          <TextLine text={'Low'} />
          </Low>
        </SLowHight>

        <SRainWind>
          <Wind>  
          <TextLine text={`${DaliyForcast.DailyForecasts[0].Day.Wind.Speed.Value} mi/h`} />
          <TextLine text={'Wind'} />
          </Wind>
          <Rain> 
          <TextLine text={`${DaliyForcast.DailyForecasts[0]?.Day.RainProbability} % `} />
          <TextLine text={'Rain'} />
          </Rain>
        </SRainWind>

        <SSetRise>
          <Sunrise> 
          <TextLine text={rise} />
          <TextLine text={'Sunrise'} />
          </Sunrise>
          <Sunset>  
          <TextLine text={set} />
          <TextLine text={'Sunset'} />
          </Sunset>
        </SSetRise>
      </CardTemp>
    </Container>
  );
}
