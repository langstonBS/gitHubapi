import React from 'react';
import { shallow } from 'enzyme';
import Displayuser from './Displayuser';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(< Displayuser name={'myName'} followerCount={'1'} followingCount={'2'} html_url={'https:/github.com'} repos={[{ name: 'myName', html_url: 'url' }, { name: 'myName', html_url: 'url' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
