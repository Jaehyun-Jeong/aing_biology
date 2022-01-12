import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

function article({ title, content }) {
  return (
    <div className="article">
      <div className="article__title">{title}</div>
      <div className="article__content">{content}</div>
    </div>
  )
}

article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default article;