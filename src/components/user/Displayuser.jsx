import React from 'react';
import PropTypes from 'prop-types';

const Displayuser = ({ name, followerCount, followingCount, githubLink }) => (
  <>
    <h2>{name}</h2>
    <h2>{followerCount}</h2>
    <h2>{followingCount}</h2>
    <h2>{githubLink}</h2>
  </>
);

Displayuser.propTypes = {
  name: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  followingCount: PropTypes.string.isRequired,
  githubLink : PropTypes.string.isRequired
};

export default Displayuser;
