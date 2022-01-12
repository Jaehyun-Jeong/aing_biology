import React from 'react';
import PropTypes from 'prop-types';
import './nav_list.css';

function nav_list({ id, title, fetch_function}) {
  return (
    <li className="nav__list">
        <div  onClick={() => fetch_function(id, title)}>
            <span>{title}</span>
        </div>
    </li>
  )
}

nav_list.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default nav_list;