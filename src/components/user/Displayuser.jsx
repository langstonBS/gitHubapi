import React from 'react';
import PropTypes from 'prop-types';
import List from '../list/List';

const Displayuser = ({ name, followerCount, followingCount, html_url, repos }) => (
  <>
    <h2>name: {name}</h2>
    <h2>followerCount: {followerCount}</h2>
    <h2>followingCount: {followingCount}</h2>
    <h2>url :{html_url}</h2>
    <List repos={repos}/>
    

  </>
);

Displayuser.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  followingCount: PropTypes.string.isRequired,
  html_url : PropTypes.string.isRequired
};

export default Displayuser;
