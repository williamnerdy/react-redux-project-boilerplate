import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('Renders without crashing', () => {
    shallow(<Button>My Button</Button>);
  });
});
