import React from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const images = [
  {
    id: 1,
    url: 'https://media.giphy.com/media/3DsNP07nApt1eEyjvM/giphy.gif'
  },
  {
    id: 2,
    url: 'https://media1.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
  },
  {
    id: 3,
    url:
      'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif'
  },
  {
    id: 4,
    url: 'https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif'
  },
  {
    id: 5,
    url: 'https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif'
  },
  {
    id: 6,
    url: 'https://buffer.com/library/wp-content/uploads/2016/06/giphy.gif'
  },
  {
    id: 7,
    url: 'https://media4.giphy.com/avatars/default5.gif'
  },
  {
    id: 8,
    url: 'https://media2.giphy.com/media/3oEduPff5ErjNmlbwY/source.gif'
  }
];

function App() {
  return (
    <div>
      <h1>Giphy Searcher</h1>
      <SearchForm />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
