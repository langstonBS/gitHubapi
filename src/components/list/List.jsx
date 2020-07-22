import React from 'react';
import PropTypes from 'prop-types';

const List = ({ repos }) => {
  const listElements = repos.map(repo => (
    <li key={repo.name}>
      <a href= {repo.html_url}> {repo.name} </a>
    </li>
  ));

  return (
    <ul>
      {listElements}
    </ul>
  );
};

List.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
  
