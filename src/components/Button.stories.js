import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Перша кнопка',
  color: 'blue',
  size: '16px',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Друга кнопка',
  color: 'gray',
  size: '14px',
  disabled: true,
};
