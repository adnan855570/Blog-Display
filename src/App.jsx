import React from 'react';
import BlogList from './components/Bloglist';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <BlogList />
    </div>
  );
};

export default App;
