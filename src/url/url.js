export const baseURL={
    AutoCompleteListURL:`http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
    DaliyForcastURL:`http://dataservice.accuweather.com/forecasts/v1/daily/1day/`,
    HoursfHourly12URL:`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/`,
    CurrentConditionsURL :`http://dataservice.accuweather.com/currentconditions/v1/ `
}

export const endPoints ={
  searchpoint:`?apikey=${process.env.REACT_APP_API_KEY}&q=`,
  endPoints:`?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`
}