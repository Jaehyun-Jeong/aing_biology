import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './nav_list.css';

function nav_list({ id, title }) {
  return (
    <li key={id}>
        <Link to={"/"+ id}>
            <span>{title}</span>
        </Link>
    </li>
  )
}

nav_list.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default nav_list;