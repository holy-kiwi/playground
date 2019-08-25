import React from 'react';
import { Provider } from 'mobx-react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Stores from './stores/export';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Provider {...Stores}>
        <DndProvider backend={HTML5Backend}>
          <HomeScreen />
        </DndProvider>
      </Provider>
    </div>
  );
}

export default App;
