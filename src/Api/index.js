import axios from 'axios'
import {baseURL,endPoints} from '../url/url'

export const getAutoCompleteList = (input) =>
axios.get(baseURL.AutoCompleteListURL+endPoints.searchpoint+input);

export const getDaliyForcast = (Key) =>
axios.get(baseURL.DaliyForcastURL+Key+endPoints.endPoints)

export const getCurrentConditions = (Key) =>
axios.get(baseURL.CurrentConditionsURL+Key+endPoints.endPoints);

export const get12HoursfHourly = (Key) =>
axios.get(baseURL.HoursfHourly12URL+Key+endPoints.endPoints);