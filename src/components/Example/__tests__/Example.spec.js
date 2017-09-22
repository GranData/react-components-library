// @flow
import React from 'react';
import { shallow } from 'enzyme';
import StatelessComponent from '../Example';

describe('Example', () => {
  it('should render the Example Component', () => {
    const wrapper = shallow(<StatelessComponent />);
    expect(wrapper.find('span').text()).toEqual('Hello world, React is awesome !!!');
  });
});
