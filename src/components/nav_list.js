import React from 'react';
import PropTypes from 'prop-types';
import './nav_list.css';

function nav_list({ title, category, index, fetch_function}) {
  return (
    <li className="nav_list" onClick={() => fetch_function(category, index)}>
      <span className="nav_list__title">{title}</span>
    </li>
  )
}

nav_list.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}

export default nav_list;