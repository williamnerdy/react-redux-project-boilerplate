import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('<Link />', () => {
  it('Renders without crashing', () => {
    shallow(<Link href="#">My link</Link>);
  });
});
