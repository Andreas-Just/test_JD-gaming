import React from 'react';
import { Provider } from 'mobx-react';
import Pagination from './components/Pagination';
import pagesStore from './stores/pages-store';
import './App.scss';

const stores = { pagesStore };

const App = () => {
  return (
    <Provider {...stores}>
      <div className="App">
        <Pagination />
      </div>
    </Provider>
  );
};

export default App;
