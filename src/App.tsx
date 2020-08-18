import React from 'react';
import { observer } from 'mobx-react';
import store from './store';

import './App.scss';

const App = observer(() => {
  return (
    <div className="App">
      <ul className="App-List">
        {store.pages.map(page => (
          <li key={page.id} className="App-Item">
            {page.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default App;
