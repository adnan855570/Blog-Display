import React from 'react';
import './App.css'
import BlogList from './components/Bloglist';

const App = () => {
  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <BlogList/>
    </div>
  );
};

export default App;
