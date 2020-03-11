import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('<Link />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Link href="#">My link</Link>);
  });

  it('Renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
