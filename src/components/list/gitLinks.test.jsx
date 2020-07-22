import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(< List repos={[{ name:'myName', html_url:'url' }, { name:'myName', html_url:'url' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
