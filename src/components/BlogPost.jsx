import React from 'react';

const BlogPost = ({ title, author, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>By {author}</h4>
      <p>{content}</p>
      <hr />
    </div>
  );
};

export default BlogPost;
