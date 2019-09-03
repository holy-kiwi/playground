import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Stores from './stores/export';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';

function App() {
  return (
    <div>
      <Provider {...Stores}>
        <DndProvider backend={HTML5Backend}>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/store" component={StoreScreen} />
        </DndProvider>
      </Provider>
    </div>
  );
}

export default App;
