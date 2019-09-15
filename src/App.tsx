import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import HomeScreen from './screens/HomeScreen';
import MarketPlaceScreen from './screens/MarketPlaceScreen';
import PluginDetailScreen from './screens/PluginDetailScreen';
import PluginUploadScreen from './screens/PluginUploadScreen';
import { HomeScreenStore } from './stores';

function App() {
  return (
    <div>
      <Provider HomeScreenStore={new HomeScreenStore()}>
        <BrowserRouter>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/upload" component={PluginUploadScreen} />
          <Switch>
            <Route path="/store/:id" component={PluginDetailScreen} />
            <Route path="/store" component={MarketPlaceScreen} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
