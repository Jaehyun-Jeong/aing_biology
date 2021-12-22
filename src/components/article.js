import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './article.css';

function article({ id, title, content }) {
  return (
    <div className="article">
      <Link to={{
        pathname: "/",
        state: {
  
        }
      }}>
        <div className="article__title">{title}</div>
      </Link>
      <div className="article__content">{content}</div>
    </div>
  )
}

article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default article;