import React from 'react';
import { shallow } from 'enzyme';
import Displayuser from './Displayuser';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(< Displayuser name={'myName'} followerCount={'1'} followingCount={'4'} githubLink={'https:/github.com'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
