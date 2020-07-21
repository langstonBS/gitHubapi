import React from 'react';
import { shallow } from 'enzyme';
import Usergitform from './Usergitform';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Usergitform userName="myName" onChange={() => { }} onSubmit={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
