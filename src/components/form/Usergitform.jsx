import React from 'react';
import PropTypes from 'prop-types';

const Usergetform = ({ userName, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} >
    <input type="text" value={userName} onChange={onChange}></input>
    <button>Submit</button>
  </form>
);

Usergetform.propTypes = {
  userName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

};

export default Usergetform;
