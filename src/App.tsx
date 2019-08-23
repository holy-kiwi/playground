import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <DragDropContextProvider backend={HTML5Backend}>
        <HomeScreen />
      </DragDropContextProvider>
    </div>
  );
}

export default App;
