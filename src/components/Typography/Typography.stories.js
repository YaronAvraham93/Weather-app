import Typography from './Typography';
import { TypographySize } from '../../config/typography';

export default {
  title: 'Header/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: TypographySize.small,
  label: 'small',
  color: 'red',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'medium',
  size: TypographySize.medium,
  color: 'blue',
};

export const Large = Template.bind({});
Large.args = {
  label: 'large',
  size: TypographySize.large,
  color: 'orange',
};
