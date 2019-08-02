import * as React from 'react';
import { storiesOf } from '@storybook/react';


interface ColorProps {
    color: string;
}

const Color: React.FunctionComponent<ColorProps> = ({color}) => {
    return (<div style={{
        width: '100px', 
        height: '100px', 
        backgroundColor: `var(--${color})`,
        display: 'inline-block'
    }}></div>);
}

storiesOf('Colors', module)
  .add('squares', () =>  (
       <React.Fragment>
           {['purple', 'green', 'red', 'yellow', 'grey'].map(color => (<Color color={color} />))}
       </React.Fragment>
  ));