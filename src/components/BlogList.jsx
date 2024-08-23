import React from 'react';
import BlogPost from './BlogPost';
import data from '../data.json';

const BlogList = () => {
  return (
    <div>
      {data.map(post => (
        <BlogPost 
          key={post.id} 
          title={post.title} 
          author={post.author} 
          content={post.content} 
        />
      ))}
    </div>
  );
};

export default BlogList;
