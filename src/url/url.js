const api='6uR5fLQNdlMXg2sSM0nwCAzg1gGoAGvy'
export const baseURL={
    AutoCompleteListURL:`https://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
    DaliyForcastURL:`https://dataservice.accuweather.com/forecasts/v1/daily/1day/`,
    HoursfHourly12URL:`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/`,
    CurrentConditionsURL :`https://dataservice.accuweather.com/currentconditions/v1/ `
}

export const endPoints ={
  searchpoint:`?apikey=${api}&q=`,
  endPoints:`?apikey=${api}&details=true&metric=true`
}