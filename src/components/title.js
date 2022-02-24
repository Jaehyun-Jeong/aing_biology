import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

function title({ title, created_date, thumbnail}) {
  return (
    <div id="title" style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thumbnail})`}} >
        <div id="title__name">{title}</div>
        <div id="title__created_date">{created_date}</div>
    </div>
  )
}

title.propTypes = {
  title: PropTypes.string.isRequired,
  created_date: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default title;