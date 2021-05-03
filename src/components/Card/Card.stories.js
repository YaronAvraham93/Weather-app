import React from 'react';
import Card from './Card';

export default {
  title: 'Container/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardAa = Template.bind({});

CardAa.args = {
  tempNumAm: '7',
  temptextAm: 'Low',
  tempNumPm: '9',
  tempTextPm: 'low',
  text: '3.1mpj',
  label: 'Wid',
  am: '08:00', 
  percent: '45%',
  situation: 'Rain',
  pm: '06:00',
  
};
