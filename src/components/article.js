import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

function article({ title, content }) {
  return (
    <div id="article">
      <div id="article__title">{title}</div>
      <div id="article__content">{content}</div>
    </div>
  )
}

article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default article;