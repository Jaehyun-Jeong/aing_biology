import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import './article.css';
import 'katex/dist/katex.min.css';

function article({ title, content }) {
  return (
    <div id="article">
      <div id="article__title">{title}</div>
      <div id="article__content">
      <Markdown
        children={content.replaceAll("\\n", "\n")}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      />
      </div>
    </div>
  )
}

article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default article;