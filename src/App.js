import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default App;
