import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { DndProvider } from 'react-dnd';

import Stores from './stores/export';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';

function App() {
  return (
    <div>
      <Provider {...Stores}>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/store" component={StoreScreen} />
      </Provider>
    </div>
  );
}

export default App;
