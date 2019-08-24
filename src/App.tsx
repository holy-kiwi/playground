import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <HomeScreen />
      </DndProvider>
    </div>
  );
}

export default App;
