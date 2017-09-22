import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StatelessComponent from './Example';

const story = storiesOf('Example', module);
story.addDecorator(withKnobs);

story.add('With knobs', () => (
  <StatelessComponent message={text('An Example')} />
));
