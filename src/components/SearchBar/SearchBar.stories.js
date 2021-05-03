import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default {
  title: 'Container/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  placeholder: 'Search your country',
  variant: 'filled',
};

export const Outlined = Template.bind({});

Outlined.args = {
  pleaceholder: 'Search your country',
  variant: 'outlined',
};
