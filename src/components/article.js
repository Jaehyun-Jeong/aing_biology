import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './article.css';

function article({ id, title, content }) {
  return (
    <Link to={{
      pathname: '/',
      state: {

      }
    }}>
      <div className="article">
        <div className="article__title">{title}</div>
        <div className="article__content">{content}</div>
      </div>
    </Link>
  )
}

article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default article;