import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(< List list={['myName', 'the langston', 'the langston']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
