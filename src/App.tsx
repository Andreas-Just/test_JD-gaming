import React from 'react';
import { Provider } from 'mobx-react';

/* components */
import Pagination from './components/Pagination';

/* stores */
import pagesStore from './stores/pages-store';

/* styles */
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
