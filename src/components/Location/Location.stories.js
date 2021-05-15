
import Location from './Location';
import { TypographySize } from '../../enums/enums';

export default {
  title: 'Container/Location',
  component: Location,
};

const Template = (args) => <Location {...args} />;
export const Small = Template.bind({});
Small.args = {
  size: TypographySize.small,
  city: 'New York, US ',
  date: ' Wednesday 1 April',
  color: 'red',
};

export const Medium = Template.bind({});
Medium.args = {
  size: TypographySize.medium,
  city: 'New York US ',
  date: ' Wednesday 1 April',

  color: 'black',
};

export const Large = Template.bind({});
Large.args = {
  size: TypographySize.large,
  city: 'New York US ',
  date: ' Wednesday 1 April',

  color: 'orange',
};
