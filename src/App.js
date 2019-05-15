import React from 'react';
import Store from './AppStore';
import { Provider } from 'react-redux';
import './styles/App.css';
import Chat from './pages/Chat';
import TopNavigation from './components/topNavigation/TopNavigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <TopNavigation />
        <Router>
          <Route path="/chat" component={Chat} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
