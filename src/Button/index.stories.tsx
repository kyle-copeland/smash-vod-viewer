import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('with text', () => (
    <React.Fragment>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='danger'>Danger</Button>
    </React.Fragment>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 