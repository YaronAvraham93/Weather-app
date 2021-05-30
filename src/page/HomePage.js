import React, { useState } from 'react';
import Typography from '../components/Typography/Typography';
import SearchBar from '../components/SearchBar/SearchBar';
import Location from '../components/Location/Location';
import Card from '../components/Card/Card';
import ForecastList from '../components/ForecastList/ForecastList';
import Helpers from '../helpers/index'
import { getAutoCompleteList, get12HoursfHourly, getCurrentConditions, getDaliyForcast } from '../Api/index';
import styled from 'styled-components';

const CweatherPage=styled.div`
margin:0;
`;

export default function WeatherPage() {
 
  const [autoComplete, setAutoComplete] = useState([]);
  const [selectValue, setselectValue] = useState('');
  const [HoursfHourly12, setHoursfHourly12] = useState({});
  const [CurrentConditions, setCurrentConditions] = useState({});
  const [DaliyForcast, setDaliyForcast] = useState({});
  const [isfinished, setIsfinished] = useState(false);
  const [pickLoction, setpickLoction] = useState({})

  const onChange = async (e) => {
    setselectValue(e.target.value);
    const result = await getAutoCompleteList(e.target.value);
    setAutoComplete(result.data);
  
  };

  const Hours_fHourly = async (Key) => {
    const result = await get12HoursfHourly(Key);
    setHoursfHourly12(result.data);
  };

  const Daliy_Forcast = async (Key) => {
    const result = await getDaliyForcast(Key);
    setDaliyForcast(result.data);
  };
  
  const Conditions = async (Key) => {
    const result = await getCurrentConditions(Key);
    setCurrentConditions(result.data[0]);
  };

  const selectFromList = async (v) => {
     await Daliy_Forcast(v.Key);
    await Hours_fHourly(v.Key);
   await  Conditions(v.Key);
    setselectValue(v.LocalizedName);
    setpickLoction(v);
    setIsfinished(true)
  };
 
  return (
    <CweatherPage>
      <Typography color={'white'} label={'Weather-app'} />
      <SearchBar
       placeholder={'Search your country'}
       autoComplete={autoComplete} 
       onChange={onChange}
        value={selectValue}
        selectFromList={selectFromList}
        />
        
        {isfinished ? (
         <>
            <Location
            city={pickLoction.LocalizedName}
            country={pickLoction.Country.ID}
            date={Helpers.GetDate()}
            />
      <Card DaliyForcast={DaliyForcast}  CurrentConditions={CurrentConditions}/> 
       <ForecastList HoursfHourly12={HoursfHourly12}/>
         </>
         
        ) :[]  }
    
      
    </CweatherPage>
  );
}
