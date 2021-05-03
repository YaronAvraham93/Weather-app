import React from 'react';
import ForecastList from './ForecastList';

export default {
  title: 'Footer/ForecastList',
  component: ForecastList,
};
const Template = (args) => <ForecastList {...args} />;

export const CardA = Template.bind({});
CardA.args = {
  date: '04.05 ',
  time: '12:45 ',
  icon: 'sun',
  temperatura: '9',
};

export const CardB = Template.bind({});
CardB.args = {
  label: 'B ',
};
