import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './article.css';
import 'katex/dist/katex.min.css';

function article({ title, created_date, body }) {
  return (
    <div id="article">
      <div id="article__title">{title}</div>
      <div id="article__created_date">{created_date}</div>
      <div id="article__body">
      <Markdown
        children={body.replaceAll("\\n", "\n")}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
      </div>
    </div>
  )
}

article.propTypes = {
  title: PropTypes.string.isRequired,
  created_date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default article;