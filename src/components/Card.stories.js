import React from 'react';
import { action } from '@storybook/addon-actions';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Приклад 1',
  description: 'Це компонент картки.',
  image: 'https://i.imgur.com/N6Hsi5l.jpeg',
  backgroundColor: 'lightgray',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Приклад 2',
  description: 'Це компонент картки без картинки.',
  backgroundColor: 'lightblue',
};
