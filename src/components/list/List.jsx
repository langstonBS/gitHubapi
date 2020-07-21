import React, { Component } from 'react';
import PropTypes from 'prop-types';

const List = ({ list }) => {
  const listElements = list.map(repoName => (
    <li key={repoName}>
      {repoName}
    </li>
  ));
  
  return (
    <ul>
      {listElements}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
  
