import React from 'react';
import Store from './AppStore';
import { Provider } from 'react-redux';
import Chat from './pages/Chat';
import TopNavigation from './components/topNavigation/TopNavigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <TopNavigation />
      <Router>
        <Route path="/chat" component={Chat} />
      </Router>
    </Provider>
  );
}

export default App;
